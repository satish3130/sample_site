const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix primaryTypographyProps
      content = content.replace(/primaryTypographyProps=\{\{ variant: '(.*?)' \}\}/g, '');
      content = content.replace(/<ListItemText primary=\{feature\} \/>/g, '<ListItemText primary={<Typography variant="body2">{feature}</Typography>} />');

      // Fix fontWeight="bold" -> sx={{ fontWeight: 'bold' }} (or just remove if too complex)
      // Actually, let's just do simple replacements.
      // Easiest is to replace fontWeight="bold" with sx={{ fontWeight: 'bold' }}
      content = content.replace(/fontWeight="bold"/g, 'sx={{ fontWeight: "bold" }}');
      // Replace paragraph with sx={{ mb: 2 }}
      content = content.replace(/paragraph\b/g, 'sx={{ mb: 2 }}');
      // Replace gutterBottom with sx={{ mb: 1 }}
      content = content.replace(/gutterBottom\b/g, 'sx={{ mb: 1 }}');
      // display="block" -> sx={{ display: 'block' }}
      content = content.replace(/display="block"/g, 'sx={{ display: "block" }}');
      
      // We might have multiple sx={{...}} now. Let's merge them roughly.
      // This regex merges two consecutive sx props (e.g. sx={{ mb: 1 }} sx={{ textTransform... }})
      // But it's safer to just replace them manually or let the browser/React merge them? No, React throws error if duplicate props.
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src'));

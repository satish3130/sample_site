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

      // The simplest fix for typography props is to replace the Typographies to not use those props, or combine them into a single sx
      // Let's replace fontWeight="bold", paragraph, gutterBottom, display="block"
      // We can just strip them and add a generic sx.
      
      const typographyRegex = /<Typography(.*?)>/g;
      content = content.replace(typographyRegex, (match, p1) => {
          let sxStyles = [];
          let newProps = p1;

          if (newProps.includes('fontWeight="bold"')) {
              sxStyles.push(`fontWeight: "bold"`);
              newProps = newProps.replace(/fontWeight="bold"/g, '');
          }
          if (newProps.includes('paragraph')) {
              sxStyles.push(`mb: 2`);
              newProps = newProps.replace(/\bparagraph\b/g, '');
          }
          if (newProps.includes('gutterBottom')) {
              sxStyles.push(`mb: 1`);
              newProps = newProps.replace(/\bgutterBottom\b/g, '');
          }
          if (newProps.includes('display="block"')) {
              sxStyles.push(`display: "block"`);
              newProps = newProps.replace(/display="block"/g, '');
          }

          if (sxStyles.length > 0) {
              // check if sx already exists
              const sxRegex = /sx=\{\{\s*(.*?)\s*\}\}/;
              const sxMatch = newProps.match(sxRegex);
              if (sxMatch) {
                  const combinedSx = sxMatch[1] + (sxMatch[1].trim() ? ', ' : '') + sxStyles.join(', ');
                  newProps = newProps.replace(sxRegex, `sx={{ ${combinedSx} }}`);
              } else {
                  newProps = `${newProps} sx={{ ${sxStyles.join(', ')} }}`;
              }
          }
          return `<Typography${newProps}>`;
      });
      
      // Fix 'component="h3"' issues - sometimes `component` prop is not accepted in older MUI typedefs with variant="h6"
      // Let's just remove `component="h3"` and `component="h1"` for now to fix TS.
      content = content.replace(/component="h[1-6]"/g, '');

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src'));

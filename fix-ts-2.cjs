const fs = require('fs');
const path = require('path');

function replaceFile(filePath, regex, replacement) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content);
}

replaceFile('src/components/common/FAQAccordion.tsx', /fontWeight=\{expanded === item.id \? 'bold' : 'normal'\}/g, 'sx={{ fontWeight: expanded === item.id ? "bold" : "normal" }}');
replaceFile('src/components/common/StatCard.tsx', /import { Paper, Typography, Box } from '@mui\/material';/g, "import { Paper, Typography } from '@mui/material';");
replaceFile('src/components/sections/FAQSection.tsx', /sx=\{\{ mb: 4, mb: 2 \}\}/g, 'sx={{ mb: 4 }}');
replaceFile('src/components/sections/FeaturesSection.tsx', /sx=\{\{ mb: 4, mb: 2 \}\}/g, 'sx={{ mb: 4 }}');
replaceFile('src/components/sections/TestimonialsSection.tsx', /sx=\{\{ mb: 4, mb: 2 \}\}/g, 'sx={{ mb: 4 }}');
replaceFile('src/components/sections/HeroSection.tsx', /<Grid container spacing=\{6\} alignItems="center">/g, '<Grid container spacing={6} sx={{ alignItems: "center" }}>');

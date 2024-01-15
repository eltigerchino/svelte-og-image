import fs from 'node:fs';

fs.copyFileSync(
	'node_modules/@vercel/og/dist/noto-sans-v27-latin-regular.ttf',
	'.vercel/output/functions/fn-1.func/noto-sans-v27-latin-regular.ttf'
);

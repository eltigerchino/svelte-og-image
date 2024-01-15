import fs from 'node:fs';

fs.mkdirSync('.vercel/output/functions/fn-1.func/_app/immutable/assets', { recursive: true });
fs.copyFileSync(
	'.vercel/output/static/_app/immutable/assets/index_bg.Odr22hN6.wasm',
	'.vercel/output/functions/fn-1.func/_app/immutable/assets/index_bg.Odr22hN6.wasm'
);

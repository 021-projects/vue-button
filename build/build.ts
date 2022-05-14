import { exec } from 'shelljs'

exec('vue-cli-service build --target=lib --name index src/main.ts')
exec('rm dist/demo.html')

exec('vue-tsc --emitDeclarationOnly --declaration --p build/tsconfig.json')
exec('mv dist/types/main.d.ts dist/types/index.d.ts')
exec('mv dist/index.css dist/style.css')
exec('rm -rf dist/types/utils')
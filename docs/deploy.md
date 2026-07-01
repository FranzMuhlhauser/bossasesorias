# Deploy del Proyecto

## Repositorio

**GitHub:** `https://github.com/FranzMuhlhauser/bossasesorias.git`

Rama principal: `main`

## Hosting

**Plataforma:** Vercel

El deploy se realiza automáticamente al hacer push a la rama `main` del repositorio de GitHub. Vercel detecta el cambio y despliega la nueva versión.

## Flujo de deploy

1. Hacer cambios en el código
2. Commitear: `git add -A && git commit -m "mensaje"`
3. Pushear: `git push origin main`
4. Vercel toma el nuevo commit y despliega automáticamente

## Build local

```bash
npm run build
```

Verificar que el build pase sin errores antes de hacer push.

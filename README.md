# Shree Ji Ceramic — Website

Simple, fast static website (HTML + CSS + JS, koi build step nahi chahiye).

Files:
- `index.html`
- `style.css`
- `script.js`
- `assets/` — showroom photos

## GitHub par daalna

1. https://github.com par jaake naya repository banao — e.g. `shreejiceramic-website` (public rakh sakte ho).
2. Apne computer par is poore `site` folder ko download/copy karo.
3. Terminal me folder ke andar jaake:
   ```
   git init
   git add .
   git commit -m "Shree Ji Ceramic website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/shreejiceramic-website.git
   git push -u origin main
   ```
   (`<your-username>` apna GitHub username daalna.)

Agar terminal use nahi karna: GitHub repo page par "uploading an existing file" link se seedhe saare files drag-and-drop bhi kar sakte ho.

## Netlify par live demo karna (GitHub se connect karke)

1. https://app.netlify.com par login/signup karo (GitHub account se bhi ho sakta hai).
2. "Add new site" → "Import an existing project" → "Deploy with GitHub" choose karo.
3. Apna `shreejiceramic-website` repo select karo.
4. Build settings me kuch bharne ki zaroorat nahi (Build command khali chhod do, Publish directory `/` rakho), kyunki ye plain HTML site hai.
5. "Deploy site" dabao — 30-60 second me ek live `.netlify.app` link mil jayega.
6. Baad me jab bhi GitHub repo me koi change push karoge, Netlify apne aap redeploy kar dega.

### Sabse tez tarika (bina GitHub ke bhi try karna ho to)
Netlify dashboard par seedha `site` folder ko "Deploys" tab me drag-and-drop kar do — turant live link mil jayega. Lekin GitHub se connect karna better hai kyunki future updates automatic ho jayenge.

## Baad me badalne layak cheezein
- Instagram ka asli link contact section me add karna hai (QR code se link clearly read nahi hua, so abhi site me Instagram button nahi rakha).
- Shop timings (`index.html` me `location-hours`) confirm karke update kar dena — abhi placeholder hai.
- Google Maps embed address se ban raha hai; agar exact pin chahiye to Google Maps par apni shop dhundo, "Share" → "Embed a map" se `<iframe>` ka `src` copy karke `index.html` me `location-map` wale iframe me daal do.

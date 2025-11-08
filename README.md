# REMI AuthBridge – Functional Auth0 Demo / Demo funcional con Auth0

**jramonrivasg – November 2025 / Noviembre 2025**  
**Location / Ubicación:** Turmero, estado Aragua, Venezuela  
**Project / Proyecto:** REMI – Patrimonial Identity Agent / Agente de Identidad Patrimonial

---

## 🧠 Purpose / Propósito

This demo showcases a minimal functional integration of Auth0 into REMI's patrimonial identity flow.  
Esta demo presenta una integración funcional mínima de Auth0 en el flujo de identidad patrimonial de REMI.

Features / Características:
- Auth0 login/logout
- Protected GitHub token vault / Bóveda protegida de tokens GitHub
- User profile visualization / Visualización de perfil de usuario
- Ready for public deployment (Glitch, Vercel, GitHub Pages) / Listo para despliegue público

---

## 🔐 Auth0 Integration / Integración con Auth0

- **Domain / Dominio:** dev-bo2ybhrn0nw1awbe.us.auth0.com  
- **Client ID:** N7Hx2pFEtikCOvNrxJI7EcduAkAACNNW  
- **Frontend only / Solo frontend** – no secret exposed / sin exponer secretos

Routes / Rutas:
- `/login`
- `/callback`
- `/logout`

---

## 🧪 Protected Resource / Recurso protegido

Once authenticated, users gain access to a protected GitHub token:  
Una vez autenticados, los usuarios acceden a un token GitHub protegido:

```text
🔐 Token GitHub: ghp_remiPatrimonialToken2025
🌐 Deployment / Despliegue
This demo is designed for public hosting and validation. Esta demo está diseñada para alojamiento público y validación externa.

🔗 https://remi-authbridge.vercel.app

📜 License: MIT 📅 Redeploy triggered: 8 November 2025

Badge sugerido para DEV: #auth0 #devchallenge #identity #ai #remi #mintbridge

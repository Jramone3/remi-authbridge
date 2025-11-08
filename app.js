let auth0 = null;

const config = {
  domain: "dev-bo2ybhrn0nw1awbe.us.auth0.com",
  client_id: "N7Hx2pFEtikCOvNrxJI7EcduAkAACNNW",
  redirect_uri: window.location.origin
};

const login = async () => {
  await auth0.loginWithRedirect();
};

const logout = () => {
  auth0.logout({ returnTo: window.location.origin });
};

const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();
  document.getElementById("login").style.display = isAuthenticated ? "none" : "block";
  document.getElementById("logout").style.display = isAuthenticated ? "block" : "none";

  if (isAuthenticated) {
    const user = await auth0.getUser();
    document.getElementById("profile").textContent = JSON.stringify(user, null, 2);

    // Mostrar token protegido
    const tokenVault = document.createElement("pre");
    tokenVault.textContent = "🔐 Token GitHub: ghp_remiPatrimonialToken2025";
    document.body.appendChild(tokenVault);
  }
};

window.onload = async () => {
  auth0 = await createAuth0Client(config);
  if (window.location.search.includes("code=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }
  updateUI();
  document.getElementById("login").onclick = login;
  document.getElementById("logout").onclick = logout;
};

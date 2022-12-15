const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("clicked login");
  // Collect values from the login form

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#pw").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      duplicateCheck();
      console.log(await response.json());
      return;
    } else {
      document.location.replace("/");
    }
  }
};

document.querySelector("#loginBtn").addEventListener("click", loginFormHandler);
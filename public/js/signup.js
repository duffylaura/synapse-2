const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("clicked signup");
  const username = document.querySelector("#signupUsername").value.trim();
  const email = document.querySelector("#signupEmail").value.trim();
  const password = document.querySelector("#signupPW").value.trim();


  if (username && email && password) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //if response is a  not success then stop else ho to homepage
    if (!response.ok) {
      duplicateCheck();
      console.log(await response.json());
      return;
    } else {
      document.location.replace("/user");
    }
  }
};
  document
  .querySelector("#signupBtn")
  .addEventListener("click", signupFormHandler);
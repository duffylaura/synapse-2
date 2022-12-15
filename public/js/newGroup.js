const nameInput = document.querySelector("#name");
const submitNameBtn = document.querySelector("#submitName");

const createGroupForm = async (e) => {
    e.preventDefault(); 
    const newGroupName = nameInput.value;

    if (newGroupName) {
        const response = await fetch ("/api/group", {
            method: "POST", 
            body: JSON.stringify ({
                newGroupName,
            }),
            headers: {"Content-Type": "application/json"}
        });

        if (response.ok) {
            window.location.assign("/profile");
        } else {
            console.log(err);
        }
    }
}

submitNameBtn.addEventListener("submit", createGroupForm); 
const define = document.querySelector("#define");
const displayDefinition = document.querySelector('#defBody')
const submitDefineBtn = document.querySelector("#submitDefine");

const createDefinitionForm = async(e) => {
    e.preventDefault();
    const newDefine = define.value;

    if (newDefine) {
        const response = await fetch("/api/user", {
            method: "PUT",
            body: JSON.stringify ({
                newDefine,
            }),
            headers: {"Content-Type": "application/json"}
        });
    if (response.ok) {

        window.location.assign("/profile");
        //refresh page to reload user's define
        
        } else {
            console.log(err); 
        }
    }
}

submitDefineBtn.addEventListener("submit", createDefinitionForm);
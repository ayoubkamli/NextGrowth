let value = false;
const showModal = () => {
    if (value){
            document.getElementById("modal").classList.add("modal")
            document.getElementById("backdrop").classList.add("modal")
    } else {
        document.getElementById("modal").classList.remove("modal")
        document.getElementById("backdrop").classList.remove("modal")

    }
    value = !value;
}
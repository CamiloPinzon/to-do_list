const handleClick = (e) => {
    const checkbox = e.target;
    let checked = checkbox.checked;
    checkbox.setAttribute("checked", checked);
}

const handleDelete = (e) => {
    const idToDelete = `${e.target.id.split("-")[1]}`;
    //make a fetch request to delete the item with the idToDelete
    fetch(`/delete/${idToDelete}`, { method: "DELETE" })
        .then(response => {
            if (response.ok) {
                window.location.reload();
            } else {
                throw new Error("Failed to delete item.");
            }
    })
}
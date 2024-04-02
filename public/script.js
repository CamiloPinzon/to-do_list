const handleClick = (e) => {
    const checkbox = e.target;
    let checked = checkbox.checked;
    checkbox.setAttribute("checked", checked);
}
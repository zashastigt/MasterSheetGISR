export default async function postData(data = {}) {
    await fetch("https://script.google.com/macros/s/AKfycbxy7MdF5YrQ9JZyucvCDotNBNZRlPAteCcCpBdwfx5v3SysSjR1ywaGiWX-4zXkoTlOeQ/exec", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}
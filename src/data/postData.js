export default async function postData(data = {}) {
    await fetch("https://script.google.com/macros/s/AKfycbwkETE2cbx-BfhO2kO9one5zRZFLVvR7_zaLwZhv4TYH1s-qvy_TrnFWZnVMM7do5Em8Q/exec", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(data)
    });
}
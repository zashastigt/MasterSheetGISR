export async function getSheetDataJson() {
    return await fetch("https://script.google.com/macros/s/AKfycbwd8fQ8bBxsd2becCeyCtR9BM4H_0S5i_viABB_-L_Mc5a7vVGfRelx7h_CPVO5Wjlvhw/exec")
    .then(response => { return response.json() });
}
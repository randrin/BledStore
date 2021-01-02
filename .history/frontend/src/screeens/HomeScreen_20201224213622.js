const HomeScreen = {
    render: () => {
        return `
        <ul class="products">
        ${products.map(product => ``)}
        </ul>
        `
    }
}
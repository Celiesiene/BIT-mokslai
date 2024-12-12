fetch('https://in3.dev/inv/')
    .then(response => response.json())
    .then(data => {
        // Sąskaitos informacija
        document.querySelector('#invoice-number').textContent = data.number;
        document.querySelector('#invoice-date').textContent = data.date;
        document.querySelector('#due-date').textContent = data.due_date;

        // Pardavėjo ir pirkėjo duomenys
        document.querySelector('#seller-details').textContent = `
            ${data.company.seller.name}, ${data.company.seller.address}
            Įmonės kodas: ${data.company.seller.code}, PVM kodas: ${data.company.seller.vat}
            Tel: ${data.company.seller.phone}, El. paštas: ${data.company.seller.email}`;

        document.querySelector('#buyer-details').textContent = `
            ${data.company.buyer.name}, ${data.company.buyer.address}
            Įmonės kodas: ${data.company.buyer.code}, PVM kodas: ${data.company.buyer.vat}
            Tel: ${data.company.buyer.phone}, El. paštas: ${data.company.buyer.email}`;

        // Prekės
        const itemsTable = document.querySelector('#items-table');
        let subtotal = 0;

        data.items.forEach(item => {
            let discount = '-';
            let discountValue = 0;

            if (item.discount && item.discount.type) {
                if (item.discount.type === 'percentage') {
                    discount = `${item.discount.value}%`;
                    discountValue = (item.price * item.quantity * item.discount.value) / 100;
                } else if (item.discount.type === 'fixed') {
                    discount = `${item.discount.value.toFixed(2)} €`;
                    discountValue = item.discount.value;
                }
            }

            const priceWithoutDiscount = item.price * item.quantity;
            const priceWithDiscount = priceWithoutDiscount - discountValue;
            subtotal += priceWithDiscount;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price.toFixed(2)} €</td>
                <td>${priceWithoutDiscount.toFixed(2)} €</td>
                <td>${discount}</td>
                <td>${priceWithDiscount.toFixed(2)} €</td>
            `;
        
            itemsTable.appendChild(row);
        });

        // Transportavimo išlaidos
        document.querySelector('#shipping-cost').textContent = `${data.shippingPrice.toFixed(2)} €`;
        subtotal += data.shippingPrice;

        // PVM ir galutinė suma
        const vat = subtotal * 0.21;
        const total = subtotal + vat;

        document.querySelector('#subtotal').textContent = subtotal.toFixed(2);
        document.querySelector('#vat').textContent = vat.toFixed(2);
        document.querySelector('#total').textContent = total.toFixed(2);
    })
    .catch(error => console.error('Klaida gaunant duomenis:', error));


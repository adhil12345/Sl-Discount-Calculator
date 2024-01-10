function calculateDiscount() {
        var originalPrice = parseFloat(document.getElementById('originalPrice').value);
        var discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

        if (!isNaN(originalPrice) && !isNaN(discountPercentage)) {
            var discountAmount = (originalPrice * discountPercentage) / 100;
            var discountedPrice = originalPrice - discountAmount;

            document.getElementById('result').innerHTML = "Discount Amount: LKR" + discountAmount.toFixed(2) +
                "<br>Discounted Price: LKR" + discountedPrice.toFixed(2);
        } else {
            document.getElementById('result').innerHTML = "Please enter valid numbers.";
        }
    }

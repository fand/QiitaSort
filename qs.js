(function(){
    var params = window.location.href.split('&');
    var pat = /^sort=/;
    var option = '';

    // Get current sort option.
    for (var i=0; i < params.length; i++) {
        if (pat.test(params[i])) {
            option = params[i].split('=')[1];
        }
    }

    var reload = function () {
        for (var i=0; i < params.length; i++) {
            if (pat.test(params[i])) {
                params[i] = 'sort=' + option;
            }
        }
        window.location.href = params.join('&');
    };

    var btn = function (val, _option) {
        var el = document.createElement('input');
        el.type = "button";
        el.value = val;
        el.dataset.option = _option;
        el.classList.add('QS-btn', 'btn');
        el.disabled = false;
        if (option == _option) {
            el.disabled = true;
        }
        el.addEventListener('click', function () {
            option = el.dataset.option;
            reload();
        });
        return el;
    };

    var btn_created = btn('created', 'created');
    var btn_stock = btn('stock', 'stock');
    var btn_reset = btn('reset', '');
    var header = document.getElementsByClassName('page-header')[0];
    header.appendChild(btn_created);
    header.appendChild(btn_stock);
    header.appendChild(btn_reset);

})();

!(function (l) {
    "use strict";
    var o = function () {
        (this.$body = l("body")), (this.charts = []);
    };
    (o.prototype.respChart = function (a, r, e, t) {
        var n = Chart.controllers.line.prototype.draw;
        (Chart.controllers.line.prototype.draw = function () {
            n.apply(this, arguments);
            var o = this.chart.chart.ctx,
                a = o.stroke;
            o.stroke = function () {
                o.save(),
                    (o.shadowColor = "#65708a"),
                    (o.shadowBlur = 10),
                    (o.shadowOffsetX = 0),
                    (o.shadowOffsetY = 4),
                    a.apply(this, arguments),
                    o.restore();
            };
        }),
            (Chart.defaults.global.defaultFontColor = "rgba(255,255,255,0.5)");
        var i = a.get(0).getContext("2d"),
            s = l(a).parent();
        return (function () {
            var o;
            switch ((a.attr("width", l(s).width()), r)) {
                case "Line":
                    o = new Chart(i, { type: "line", data: e, options: t });
                    break;
                case "Doughnut":
                    o = new Chart(i, { type: "doughnut", data: e, options: t });
                    break;
                case "Pie":
                    o = new Chart(i, { type: "pie", data: e, options: t });
                    break;
                case "Bar":
                    o = new Chart(i, { type: "bar", data: e, options: t });
                    break;
                case "Radar":
                    o = new Chart(i, { type: "radar", data: e, options: t });
                    break;
                case "PolarArea":
                    o = new Chart(i, {
                        data: e,
                        type: "polarArea",
                        options: t,
                    });
            }
            return o;
        })();
    }),
        (o.prototype.init = function () {
            l("#datatable").DataTable({
                pageLength: 5,
                searching: !1,
                lengthChange: !1,
            });
        }),
        (l.Dashboard = new o()),
        (l.Dashboard.Constructor = o);
})(window.jQuery),
    (function (o) {
        "use strict";
        window.jQuery.Dashboard.init();
    })();

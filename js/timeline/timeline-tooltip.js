import {TimeAxis} from "./time-axis.js";

export class TimelineTooltip {

    static appendTooltip(body) {

        const tooltip = body.append('div');
        tooltip.attr('class', 'timeline-tooltip');
        tooltip.style('opacity', 0);

        return tooltip;

    }

    static mouseMove(vis, parentSelector) {
        return function(d) {
            const x = d3.mouse(this)[0];
            const y = d3.mouse(this)[1];
            const parentx = d3.select(parentSelector).node().getBoundingClientRect().x;
            const parenty = d3.select(parentSelector).node().getBoundingClientRect().y;

            const html = vis.tooltip.html(TimeAxis.formatTime(d['Date']));
            html.style('left', (x + parentx + 35) + "px");
            html.style('top', (y + parenty + 10) + "px");

            vis.tooltip.transition().duration(200).style('opacity', 0.9);
        }
    }

    static mouseOut(vis) {
        return function(d) {
            vis.tooltip.transition().duration(500).style('opacity', 0);
        }
    }
}
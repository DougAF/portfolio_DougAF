const projects_button = d3.select("#projects-btn");
projects_button.on("click", function() {

    d3.event.preventDefault();

    projects_button.classed("active", true);
    aboutme_button.classed("active", false);
    cv_button.classed("active", false);

    let bottom_row = d3.select("#project-2");
    bottom_row.classed("bottom-problem", true);

    let excel_title = d3.select("#title-2");
    excel_title.classed("bottom-problem-2", false);

    let title = d3.select("#title");
    title.html("");

    let panel_img = d3.select("#panel-img");
    panel_img.html("");
    panel_img.html("<img src='images/earthquake_screenshot.png' alt='' class='img-responsive center-block'>");

    let panel = d3.select("#panel");
    panel.html("");
    panel.html("<h3>Global Earthquake Map: Leaflet</h3><p>A simple web app built to map seismic event data across the globe. Users can zoom, toggle view types and click events for more info in the Leaflet map. Technologies used include JavaScript, HTML, CSS, and an opensource API.</p>");

    let panel_img_2 = d3.select("#panel-img-2");
    panel_img_2.html("");
    panel_img_2.html("<img src='images/biodiversity_screenshot.png' alt='' class='img-responsive center-block'>");

    let panel_2 = d3.select("#panel-2");
    panel_2.html("");
    panel_2.html("<h3>Microbe Biodiversity</h3><p>This project uses javascript and HTML to visualize belly button microbe samples from over 1000 people! Humans are colonized by microorganisms. These microorganisms create a unique microbiome, or small ecosystem, on/in each one of us! Our unique genetics and lifestyles individualize our microbiomes, which interact with our bodies in complex ways via interrelated physiological systems.</p>");

    let tableau_panel = d3.select("#tableau-panel");
    tableau_panel.html("");

    let excel = d3.select("#excel");
    excel.html("");

    let excel_panel = d3.select("#excel-panel");
    excel_panel.html("");

    let title_2 = d3.select("#title-2");
    title_2.html("");

    let excel_2 = d3.select("#excel-2");
    excel_2.html("");

    let excel_panel_2 = d3.select("#excel-panel-2");
    excel_panel_2.html("");

});

const aboutme_button = d3.select("#aboutme-btn");
aboutme_button.on("click", function() {

    d3.event.preventDefault();

    projects_button.classed("active", false);
    aboutme_button.classed("active", true);
    cv_button.classed("active", false);

    let bottom_row = d3.select("#project-2");
    bottom_row.classed("bottom-problem", false);

    let excel_title = d3.select("#title-2");
    excel_title.classed("bottom-problem-2", false);

    let title = d3.select("#title");
    title.html("");
    title.html("About Me");

    let panel_img = d3.select("#panel-img");
    panel_img.html("");

    let panel = d3.select("#panel");
    panel.html("");

    let panel_img_2 = d3.select("#panel-img-2");
    panel_img_2.html("");

    let panel_2 = d3.select("#panel-2");
    panel_2.html("");

    let tableau_panel = d3.select("#tableau-panel");
    tableau_panel.html("<iframe src=</iframe>");

    let excel = d3.select("#excel");
    excel.html("");

    let excel_panel = d3.select("#excel-panel");
    excel_panel.html("");
    
    let title_2 = d3.select("#title-2");
    title_2.html("");

    let excel_2 = d3.select("#excel-2");
    excel_2.html("");

    let excel_panel_2 = d3.select("#excel-panel-2");
    excel_panel_2.html("");

});

const cv_button = d3.select("#cv-btn");
cv_button.on("click", function() {

    d3.event.preventDefault();

    projects_button.classed("active", false);
    aboutme_button.classed("active", false);
    cv_button.classed("active", true);

    let bottom_row = d3.select("#project-2");
    bottom_row.classed("bottom-problem", false);

    let excel_title = d3.select("#title-2");
    excel_title.classed("bottom-problem-2", true);

    let title = d3.select("#title");
    title.html("");
    title.html("Curriculum Vitae");

    let panel_img = d3.select("#panel-img");
    panel_img.html("");

    let panel = d3.select("#panel");
    panel.html("");

    let panel_img_2 = d3.select("#panel-img-2");
    panel_img_2.html("");

    let panel_2 = d3.select("#panel-2");
    panel_2.html("");

    let tableau_panel = d3.select("#tableau-panel");
    tableau_panel.html("");

    let excel = d3.select("#excel");
    excel.html("description");

    let excel_panel = d3.select("#excel-panel");
    excel_panel.html("<iframe src='https://onedrive.live.com/</iframe>");

    let title_2 = d3.select("#title-2");
    title_2.html("");
    title_2.html("Interests and Hobbies");

    let excel_2 = d3.select("#excel-2");
    excel_2.html("<p>Reading, Videogames, Learning languages and software</p>");

    let excel_panel_2 = d3.select("#excel-panel-2");
    excel_panel_2.html("<img src='' alt='' class='img-responsive center-block'>");

});
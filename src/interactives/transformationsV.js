function HTranslationDiagram() {
    this.canvas = new Canvas("htranslations", [-3,-3,3,3]);
    this.canvas.margins = [5,5,5,5]
    this.canvas.setUpCoordinates();
    
    this.scanvas = new Canvas("hslider", [-4,-1,4,1]);
    this.scanvas.margins = [5,5,5,5];
    this.scanvas.setUpCoordinates();
    
    this.a = 0;

    this.g = function(x) {
	return 1*(Math.atan(x) - (x**2/4-2*x)*Math.exp(-x*x/3))+0.5 +
	    0.25*Math.sin(x);
    }.bind(this);
    
    this.f = function(x) {
	x = x-this.a;
	return this.g(x);
    }.bind(this);
    
    var grid = new Grid([-3,0.5,3], [-3,0.5,3]);
    this.canvas.addPlotable(grid);
    
    var axes = new Axes();
    axes.ticks= [[-3,1,3],[-3,1,3]];
    axes.labels=[[-3,1,3],[-3,1,3]];
    this.canvas.addPlotable(axes);
    
    var graygraph = new Graph(new Function(this.g));
    graygraph.strokeColor = "lightgray";
    graygraph.lineWidth=2;
    this.canvas.addPlotable(graygraph);
    
    var graph = new Graph(new Function(this.f));
    graph.strokeColor = "blue";
    graph.lineWidth=2;
    graph.N=600;
    this.canvas.addPlotable(graph);
    
    this.move = function() {
	this.a = this.slider.coordinate();
	this.update();
    }.bind(this);
    
    this.slider = new Slider([-3,3], 0, [-3,3], this.move);
    this.slider.point.style = "box";
    this.slider.point.size=4;
    this.slider.point.fillColor="red";
    this.slider.init(0);
    this.slider.ticks=[-3,1,3];
    this.slider.labels=[-3,1,3];
    
    this.scanvas.addPlotable(this.slider);
    this.scanvas.addMoveable(this.slider);
    
    var label = new Label("b", [-3,0]);
    label.offset=[-8,5];
    label.alignment="rb";
    this.scanvas.addPlotable(label);
    
    this.update = function() {
	this.scanvas.draw();
	this.canvas.draw();
    }.bind(this);
    
    this.update();
}

function VTranslationDiagram() {
    this.canvas = new Canvas("vtranslations", [-3,-3,3,3]);
    this.canvas.margins = [5,5,5,5]
    this.canvas.setUpCoordinates();
    
    this.scanvas = new Canvas("vslider", [-4,-1,4,1]);
    this.scanvas.margins = [5,5,5,5];
    this.scanvas.setUpCoordinates();
    
    this.a = 0;

    this.g = function(x) {
	return 0.4 * (1*(Math.atan(x) - (x**2/4-2*x)*Math.exp(-x*x/3))+0.5 +
	    0.25*Math.sin(x));
    }.bind(this);
    
    this.f = function(x) {
	return this.g(x) + this.a;
    }.bind(this);
    
    var grid = new Grid([-3,0.5,3], [-3,0.5,3]);
    this.canvas.addPlotable(grid);
    
    var axes = new Axes();
    axes.ticks= [[-3,1,3],[-3,1,3]];
    axes.labels=[[-3,1,3],[-3,1,3]];
    this.canvas.addPlotable(axes);
    
    var graygraph = new Graph(new Function(this.g));
    graygraph.strokeColor = "lightgray";
    graygraph.lineWidth=2;
    this.canvas.addPlotable(graygraph);
    
    var graph = new Graph(new Function(this.f));
    graph.strokeColor = "blue";
    graph.lineWidth=2;
    this.canvas.addPlotable(graph);
    
    this.move = function() {
	this.a = this.slider.coordinate();
	this.update();
    }.bind(this);
    
    this.slider = new Slider([-3,3], 0, [-3,3], this.move);
    this.slider.point.style = "box";
    this.slider.point.size=4;
    this.slider.point.fillColor="red";
    this.slider.init(0);
    this.slider.ticks=[-3,1,3];
    this.slider.labels=[-3,1,3];
    
    this.scanvas.addPlotable(this.slider);
    this.scanvas.addMoveable(this.slider);
    
    var label = new Label("a", [-3,0]);
    label.offset=[-8,5];
    label.alignment="rb";
    this.scanvas.addPlotable(label);
    
    this.update = function() {
	this.scanvas.draw();
	this.canvas.draw();
    }.bind(this);
    
    this.update();
}

function StretchingDiagram() {
    this.canvas = new Canvas("stretching", [-3,-3,3,3]);
    this.canvas.margins = [5,5,5,5]
    this.canvas.setUpCoordinates();
    
    this.scanvas = new Canvas("sslider", [-4,-1,4,1]);
    this.scanvas.margins = [5,5,5,5];
    this.scanvas.setUpCoordinates();
    
    this.a = 1;

    this.g = function(x) {
	return Math.abs(x-1)-1;
    }.bind(this);
    
    this.f = function(x) {
	return this.a * this.g(x);
    }.bind(this);
    
    var grid = new Grid([-3,0.5,3], [-3,0.5,3]);
    this.canvas.addPlotable(grid);
    
    var axes = new Axes();
    axes.ticks= [[-3,1,3],[-3,1,3]];
    axes.labels=[[-3,1,3],[-3,1,3]];
    this.canvas.addPlotable(axes);
    
    var graygraph = new Graph(new Function(this.g));
    graygraph.strokeColor = "lightgray";
    graygraph.lineWidth=2;
    this.canvas.addPlotable(graygraph);
    
    var graph = new Graph(new Function(this.f));
    graph.strokeColor = "blue";
    graph.lineWidth=2;
    this.canvas.addPlotable(graph);
    
    this.move = function() {
	this.a = this.slider.coordinate();
	this.update();
    }.bind(this);
    
    this.slider = new Slider([-3,3], 0, [-3,3], this.move);
    this.slider.point.style = "box";
    this.slider.point.size=4;
    this.slider.point.fillColor="red";
    this.slider.init(1);
    this.slider.ticks=[-3,1,3];
    this.slider.labels=[-3,1,3];
    
    this.scanvas.addPlotable(this.slider);
    this.scanvas.addMoveable(this.slider);
    
    var label = new Label("c", [-3,0]);
    label.offset=[-8,5];
    label.alignment="rb";
    this.scanvas.addPlotable(label);
    
    this.update = function() {
	this.scanvas.draw();
	this.canvas.draw();
    }.bind(this);
    
    this.update();
}

// new HTranslationDiagram();
new VTranslationDiagram();
// new StretchingDiagram();

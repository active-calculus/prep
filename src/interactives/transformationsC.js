function CompressingDiagram() {
    this.canvas = new Canvas("compressing", [-6,-1.5,6,1.5]);
    this.canvas.margins = [5,5,5,5]
    this.canvas.setUpCoordinates();
    
    this.scanvas = new Canvas("cslider", [-1,-1,5,1]);
    this.scanvas.margins = [5,5,5,5];
    this.scanvas.setUpCoordinates();
    
    this.a = 1;

    this.g = function(x) {
	return Math.sin(x);
    }.bind(this);
    
    this.f = function(x) {
	return this.g(this.a * x);
    }.bind(this);
    
    var grid = new Grid([-6,1,6],[-1.5,0.25,1.5]);
    this.canvas.addPlotable(grid);
    
    var axes = new Axes();
    axes.ticks= [[-6,1,6],[-1,1,1]];
    axes.labels=[[-6,2,6],[-1,1,1]];
    this.canvas.addPlotable(axes);
    
    var graygraph = new Graph(new Function(this.g));
    graygraph.strokeColor = "lightgray";
    graygraph.lineWidth=2;
    this.canvas.addPlotable(graygraph);
    
    var graph = new Graph(new Function(this.f, N=600));
    graph.strokeColor = "blue";
    graph.lineWidth=2;
    graph.N = 500;
    this.canvas.addPlotable(graph);
    
    this.move = function() {
	this.a = this.slider.coordinate();
	this.update();
    }.bind(this);
    
    this.slider = new Slider([0,4], 0, [0.01,4], this.move);
    this.slider.point.style = "box";
    this.slider.point.size=4;
    this.slider.point.fillColor="red";
    this.slider.init(1);
    this.slider.ticks=[0,1,4];
    this.slider.labels=[0,1,4];
    
    this.scanvas.addPlotable(this.slider);
    this.scanvas.addMoveable(this.slider);
    
    var label = new Label("k", [0,0]);
    label.offset=[-8,5];
    label.alignment="rb";
    this.scanvas.addPlotable(label);
    
    this.update = function() {
	this.scanvas.draw();
	this.canvas.draw();
    }.bind(this);
    
    this.update();
}

new CompressingDiagram();

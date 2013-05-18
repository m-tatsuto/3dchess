var threeJs3DshougiFrameLineX = [];
var threeJs3DshougiFrameLineY = [];
var threeJs3DshougiFrameLineZ = [];

var AroundlineColor = 0x0000ff;
var InnerlineColor = 0x009999;

function make3DshougiFrameObject() {
  geometry = new THREE.Geometry();
  geometry.vertices.push( new THREE.Vector3( -450,  350, -450) );
  geometry.vertices.push( new THREE.Vector3( -450, -450, -450) );
  geometry.vertices.push( new THREE.Vector3(  350, -450, -450) );
  geometry.vertices.push( new THREE.Vector3(  350,  350, -450) );
  geometry.vertices.push( new THREE.Vector3( -450,  350, -450) );
  geometry.vertices.push( new THREE.Vector3( -450,  350,  350) );
  geometry.vertices.push( new THREE.Vector3( -450, -450,  350) );
  geometry.vertices.push( new THREE.Vector3(  350, -450,  350) );
  geometry.vertices.push( new THREE.Vector3(  350,  350,  350) );
  geometry.vertices.push( new THREE.Vector3( -450,  350,  350) );
  geometry.vertices.push( new THREE.Vector3( -450, -450,  350) );
  geometry.vertices.push( new THREE.Vector3( -450, -450, -450) );
  geometry.vertices.push( new THREE.Vector3(  350, -450, -450) );
  geometry.vertices.push( new THREE.Vector3(  350, -450,  350) );
  geometry.vertices.push( new THREE.Vector3(  350,  350,  350) );
  geometry.vertices.push( new THREE.Vector3(  350,  350, -450) );
  material = new THREE.LineBasicMaterial( { color: AroundlineColor ,  transparent: true, opacity: 0.5} );
  mesh = new THREE.Line( geometry, material );
  scene.add( mesh );
}

var selectLineObject = [];

function makeSelectLineObject( x, y, z ) {

  var distanceX = x * 100;
  var distanceY = y * 100;
  var distanceZ = z * 100;

  /*
  var threeJsSelectLineGeometry = new THREE.CubeGeometry( 100, 100, 900 );
  var threeJsSelectLineMaterial = new THREE.MeshBasicMaterial( { color: InnerlineColor, wireframe: true } );

  selectLineObject[0] = new THREE.Mesh( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  selectLineObject[0].position = { x : (-400 + distanceX), y : (-400 + distanceY), z : 0 };
  scene.add( selectLineObject[0] );

  threeJsSelectLineGeometry = new THREE.CubeGeometry( 100, 900, 100 );
  threeJsSelectLineMaterial = new THREE.MeshBasicMaterial( { color: InnerlineColor, wireframe: true } );
  selectLineObject[1] = new THREE.Mesh( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  selectLineObject[1].position = { x : (-400 + distanceX), y : 0, z : (-400 + distanceZ) };
  scene.add( selectLineObject[1] );

  threeJsSelectLineGeometry = new THREE.CubeGeometry( 900, 100, 100 );
  threeJsSelectLineMaterial = new THREE.MeshBasicMaterial( { color: InnerlineColor, wireframe: true } );
  selectLineObject[2] = new THREE.Mesh( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  selectLineObject[2].position = { x : 0, y : (-400 + distanceY), z : (-400 + distanceZ) };
  scene.add( selectLineObject[2] );
  */

  var threeJsSelectLineGeometry = new THREE.Geometry();
  var threeJsSelectLineMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor ,  transparent: true, opacity: 1} );

  threeJsSelectLineGeometry = new THREE.Geometry();
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX), (-400 + distanceY), -450 ) );
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX), (-400 + distanceY),  350 ) );
  selectLineObject[0] = new THREE.Line( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  scene.add( selectLineObject[0] );

  threeJsSelectLineGeometry = new THREE.Geometry();
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX), -450, (-400 + distanceZ) ) );
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX),  350, (-400 + distanceZ) ) );
  selectLineObject[1] = new THREE.Line( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  scene.add( selectLineObject[1] );

  threeJsSelectLineGeometry = new THREE.Geometry();
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( -450, (-400 + distanceY), (-400 + distanceZ) ) );
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3(  350, (-400 + distanceY), (-400 + distanceZ) ) );
  selectLineObject[2] = new THREE.Line( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  scene.add( selectLineObject[2] );

}

function deleteSelectLine() {
  scene.remove( selectLineObject[0] );
  scene.remove( selectLineObject[1] );
  scene.remove( selectLineObject[2] );
}

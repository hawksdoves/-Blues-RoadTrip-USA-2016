describe('RoadTripController', function() {
  beforeEach(module('roadtripApp'));

  var ctrl, MapService, httpBackend;

  beforeEach(inject(function($controller, _MapService_, $httpBackend) {
    ctrl = $controller('RoadTripController');
    MapService = _MapService_;
    httpBackend = $httpBackend;
  }));

  it('should call maps', function() {
    expect(MapService.maps).toHaveBeenCalled;
  });

});

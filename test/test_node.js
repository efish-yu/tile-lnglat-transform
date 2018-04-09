/*
 * Created by CntChen 2016.05.06
 * write by ES5
 */

var TileLnglatTransform = require('../builds/index');

var TileLnglatTransformGaode = TileLnglatTransform.TileLnglatTransformGaode;
var TileLnglatTransformBaidu = TileLnglatTransform.TileLnglatTransformBaidu;
var TileLnglatTransformTencent = TileLnglatTransform.TileLnglatTransformTencent;
var TileLnglatTransformBing = TileLnglatTransform.TileLnglatTransformBing;

console.log(TileLnglatTransformBing)
var lnglat = {
  lng: 114.15343165397644,
  lat: 22.411038440074023
};
var level = 18;

// test for Gaode map
// Google map work like Gaode map
console.log('Gaode map test:');
console.log('input lnglat:', lnglat, '\n', 'map level:', level);
var tile_gaode = TileLnglatTransformGaode.lnglatToTile(lnglat.lng, lnglat.lat, level);
console.log('to tile result:', tile_gaode);
console.log('verify url: http://wprd03.is.autonavi.com/appmaptile?style=7&x='+tile_gaode.tileX+'&y='+tile_gaode.tileY+'&z='+level);
var pixel_gaode = TileLnglatTransformGaode.lnglatToPixel(lnglat.lng, lnglat.lat, level);
console.log('to pixel result:', pixel_gaode);
var lnglat_gaode = TileLnglatTransformGaode.pixelToLnglat(pixel_gaode.pixelX, pixel_gaode.pixelY, tile_gaode.tileX, tile_gaode.tileY, level);
console.log('to lnglat result:', lnglat_gaode);
console.log('\n');

// Dayu 20180409
// 计算左上角经纬度
lnglat_gaode = TileLnglatTransformGaode.pixelToLnglat(0, 0, 106594, 56585, 17);
console.log('top left to lnglat result:', lnglat_gaode);
// 计算右下角经纬度
lnglat_gaode = TileLnglatTransformGaode.pixelToLnglat(255, 255, 107097, 57159, 17);
console.log('bottom right to lnglat result:', lnglat_gaode);
console.log('\n');
// top left to lnglat result: { lng: 112.7691650390625, lat: 23.86323358998692 }
// bottom right to lnglat result: { lng: 114.15343165397644, lat: 22.411038440074023 }
// 利用17级计算出来的经纬度，反过来计算18级的瓦片编码范围，然后反向代理爬去，

// 计算得到 18级瓦片
// to tile result: { tileX: 213188, tileY: 113170 }
// 



// test for Baidu map
// test data from http://www.cnblogs.com/jz1108/archive/2011/07/02/2095376.html
console.log('Baidu map test:');
console.log('input lnglat:', lnglat, '\n', 'map level:', level);
var point_baidu = TileLnglatTransformBaidu.lnglatToPoint(lnglat.lng, lnglat.lat);
console.log('to point result:', point_baidu);
var tile_baidu = TileLnglatTransformBaidu.lnglatToTile(lnglat.lng, lnglat.lat, level);
console.log('to tile result:', tile_baidu);
console.log('verify url: http://online1.map.bdimg.com/onlinelabel/?qt=tile&x='+tile_baidu.tileX+'&y='+tile_baidu.tileY+'&z='+level);
var pixel_baidu = TileLnglatTransformBaidu.lnglatToPixel(lnglat.lng, lnglat.lat, level);
console.log('to pixel result:', pixel_baidu);
var lnglat_baidu = TileLnglatTransformBaidu.pixelToLnglat(pixel_baidu.pixelX, pixel_baidu.pixelY, tile_baidu.tileX, tile_baidu.tileY, level);
console.log('to lnglat result:', lnglat_baidu);
var lnglat_frompoint_baidu = TileLnglatTransformBaidu.pointToLnglat(point_baidu.pointX, point_baidu.pointY);
console.log('to lnglat from point result:', lnglat_frompoint_baidu);
console.log('\n');

// test for Tencent map
console.log('Tencent map test:');
console.log('input lnglat:', lnglat, '\n', 'map level:', level);
var tile_gaode = TileLnglatTransformTencent.lnglatToTile(lnglat.lng, lnglat.lat, level);
console.log('to tile result:', tile_gaode);
console.log('quadkey to tile result:', TileLnglatTransformBing.quadkeyToLnglat('132122221030002102'));
console.log('verify url:http://rt1.map.gtimg.com/tile?z=' + level + '&x=' + tile_gaode.tileX + '&y=' + tile_gaode.tileY + '&styleid=1&version=117');
var pixel_gaode = TileLnglatTransformTencent.lnglatToPixel(lnglat.lng, lnglat.lat, level);
console.log('to pixel result:', pixel_gaode);
var lnglat_gaode = TileLnglatTransformTencent.pixelToLnglat(pixel_gaode.pixelX, pixel_gaode.pixelY, tile_gaode.tileX, tile_gaode.tileY, level);
console.log('to lnglat result:', lnglat_gaode);
console.log('\n');

// test for Bing map
console.log('Bing map test:');
console.log('input lnglat:', lnglat, '\n', 'map level:', level);
var tile_bing = TileLnglatTransformBing.lnglatToTile(lnglat.lng, lnglat.lat, level);
console.log('to tile result:', tile_bing);
var pixel_gaode = TileLnglatTransformTencent.lnglatToPixel(lnglat.lng, lnglat.lat, level);
console.log('to pixel result:', pixel_gaode);
var quadkey = TileLnglatTransformBing.lnglatToQuadkey(tile_bing.tileX, tile_bing.tileY, level);
console.log('lnglat to quadkey:', quadkey); 
console.log('verify url:http://dynamic.t2.tiles.ditu.live.com/comp/ch/' + quadkey + '?it=G,OS,L&mkt=en-us&cstl=w4c&ur=cn');
console.log('quadkey to tile result:', TileLnglatTransformBing.quadkeyToLnglat('132122221030021'));

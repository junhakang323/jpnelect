var wms_layers = [];


        var lyr_ff_0 = new ol.layer.Tile({
            'title': 'ff',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=ko&region=ko&x={x}&y={y}&z={z}'
            })
        });
var format_j_1 = new ol.format.GeoJSON();
var features_j_1 = format_j_1.readFeatures(json_j_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_j_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_j_1.addFeatures(features_j_1);
var lyr_j_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_j_1, 
                style: style_j_1,
				'opacity': 0.7,
                interactive: true,
    title: 'j<br />\
    <img src="styles/legend/j_1_0.png" /> 0.3 - 5<br />\
    <img src="styles/legend/j_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/j_1_2.png" /> 10 - 20<br />\
    <img src="styles/legend/j_1_3.png" /> 20 - 30<br />\
    <img src="styles/legend/j_1_4.png" /> 30 - 40<br />\
    <img src="styles/legend/j_1_5.png" /> 40 - 70.5<br />'
        });
var format_d_2 = new ol.format.GeoJSON();
var features_d_2 = format_d_2.readFeatures(json_d_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_2.addFeatures(features_d_2);
var lyr_d_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_d_2, 
                style: style_d_2,
				'opacity': 0.7,
                interactive: true,
    title: 'd<br />\
    <img src="styles/legend/d_2_0.png" /> 0.1 - 5<br />\
    <img src="styles/legend/d_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/d_2_2.png" /> 10 - 20<br />\
    <img src="styles/legend/d_2_3.png" /> 20 - 30<br />\
    <img src="styles/legend/d_2_4.png" /> 30 - 12.6<br />\
    <img src="styles/legend/d_2_5.png" /> 12.6 - 29.1<br />'
        });
var format_y_3 = new ol.format.GeoJSON();
var features_y_3 = format_y_3.readFeatures(json_y_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_y_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_y_3.addFeatures(features_y_3);
var lyr_y_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_y_3, 
                style: style_y_3,
				'opacity': 0.7,
                interactive: true,
    title: 'y<br />\
    <img src="styles/legend/y_3_0.png" /> 0.8 - 5<br />\
    <img src="styles/legend/y_3_1.png" /> 5 - 10<br />\
    <img src="styles/legend/y_3_2.png" /> 10 - 20<br />\
    <img src="styles/legend/y_3_3.png" /> 20 - 30<br />\
    <img src="styles/legend/y_3_4.png" /> 30 - 23.5<br />\
    <img src="styles/legend/y_3_5.png" /> 23.5 - 25.9<br />'
        });
var format_s_4 = new ol.format.GeoJSON();
var features_s_4 = format_s_4.readFeatures(json_s_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_s_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_s_4.addFeatures(features_s_4);
var lyr_s_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_s_4, 
                style: style_s_4,
				'opacity': 0.7,
                interactive: true,
    title: 's<br />\
    <img src="styles/legend/s_4_0.png" /> 0 - 5<br />\
    <img src="styles/legend/s_4_1.png" /> 5 - 10<br />\
    <img src="styles/legend/s_4_2.png" /> 10 - 6.43<br />\
    <img src="styles/legend/s_4_3.png" /> 6.43 - 6.43<br />\
    <img src="styles/legend/s_4_4.png" /> 6.43 - 6.43<br />\
    <img src="styles/legend/s_4_5.png" /> 6.43 - 6.43<br />'
        });
var format_c_5 = new ol.format.GeoJSON();
var features_c_5 = format_c_5.readFeatures(json_c_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_5.addFeatures(features_c_5);
var lyr_c_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_5, 
                style: style_c_5,
				'opacity': 0.7,
                interactive: true,
    title: 'c<br />\
    <img src="styles/legend/c_5_0.png" /> 4.79 - 5<br />\
    <img src="styles/legend/c_5_1.png" /> 5 - 4.79<br />\
    <img src="styles/legend/c_5_2.png" /> 4.79 - 4.79<br />\
    <img src="styles/legend/c_5_3.png" /> 4.79 - 4.79<br />\
    <img src="styles/legend/c_5_4.png" /> 4.79 - 4.79<br />\
    <img src="styles/legend/c_5_5.png" /> 4.79 - 4.79<br />'
        });
var format_i_6 = new ol.format.GeoJSON();
var features_i_6 = format_i_6.readFeatures(json_i_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_i_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_i_6.addFeatures(features_i_6);
var lyr_i_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_i_6, 
                style: style_i_6,
				'opacity': 0.7,
                interactive: true,
    title: 'i<br />\
    <img src="styles/legend/i_6_0.png" /> 4.1 - 5<br />\
    <img src="styles/legend/i_6_1.png" /> 5 - 10<br />\
    <img src="styles/legend/i_6_2.png" /> 10 - 20<br />\
    <img src="styles/legend/i_6_3.png" /> 20 - 30<br />\
    <img src="styles/legend/i_6_4.png" /> 30 - 40<br />\
    <img src="styles/legend/i_6_5.png" /> 40 - 42.6<br />'
        });
var format_km_7 = new ol.format.GeoJSON();
var features_km_7 = format_km_7.readFeatures(json_km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_km_7.addFeatures(features_km_7);
var lyr_km_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_km_7, 
                style: style_km_7,
				'opacity': 0.7,
                interactive: true,
    title: 'km<br />\
    <img src="styles/legend/km_7_0.png" /> 0 - 5<br />\
    <img src="styles/legend/km_7_1.png" /> 5 - 10<br />\
    <img src="styles/legend/km_7_2.png" /> 10 - 20<br />\
    <img src="styles/legend/km_7_3.png" /> 20 - 30<br />\
    <img src="styles/legend/km_7_4.png" /> 30 - 40<br />\
    <img src="styles/legend/km_7_5.png" /> 40 - 32.2<br />'
        });
var format_g_8 = new ol.format.GeoJSON();
var features_g_8 = format_g_8.readFeatures(json_g_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_g_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_g_8.addFeatures(features_g_8);
var lyr_g_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_g_8, 
                style: style_g_8,
				'opacity': 0.7,
                interactive: true,
    title: 'g<br />\
    <img src="styles/legend/g_8_0.png" /> 0 - 5<br />\
    <img src="styles/legend/g_8_1.png" /> 5 - 10<br />\
    <img src="styles/legend/g_8_2.png" /> 10 - 20<br />\
    <img src="styles/legend/g_8_3.png" /> 20 - 30<br />\
    <img src="styles/legend/g_8_4.png" /> 30 - 40<br />\
    <img src="styles/legend/g_8_5.png" /> 40 - 100<br />'
        });
var format_senkyoku289polygon_9 = new ol.format.GeoJSON();
var features_senkyoku289polygon_9 = format_senkyoku289polygon_9.readFeatures(json_senkyoku289polygon_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_senkyoku289polygon_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_senkyoku289polygon_9.addFeatures(features_senkyoku289polygon_9);
var lyr_senkyoku289polygon_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_senkyoku289polygon_9, 
                style: style_senkyoku289polygon_9,
                interactive: true,
                title: '<img src="styles/legend/senkyoku289polygon_9.png" /> senkyoku289polygon 복사'
            });

lyr_ff_0.setVisible(true);lyr_j_1.setVisible(true);lyr_d_2.setVisible(true);lyr_y_3.setVisible(true);lyr_s_4.setVisible(true);lyr_c_5.setVisible(true);lyr_i_6.setVisible(true);lyr_km_7.setVisible(true);lyr_g_8.setVisible(true);lyr_senkyoku289polygon_9.setVisible(true);
var layersList = [lyr_ff_0,lyr_j_1,lyr_d_2,lyr_y_3,lyr_s_4,lyr_c_5,lyr_i_6,lyr_km_7,lyr_g_8,lyr_senkyoku289polygon_9];
lyr_j_1.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_d_2.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_y_3.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_s_4.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_c_5.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_i_6.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_km_7.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_g_8.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_senkyoku289polygon_9.set('fieldAliases', {'kucode': 'kucode', '지역구': '지역구', '당선인': '당선인', 'photo': 'photo', '소속 정당': '소속 정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_j_1.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_d_2.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_y_3.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_s_4.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_c_5.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_i_6.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_km_7.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_g_8.set('fieldImages', {'kucode': 'Hidden', '지역구': 'TextEdit', '당선인': 'TextEdit', 'photo': 'TextEdit', '소속 정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_senkyoku289polygon_9.set('fieldImages', {'kucode': 'Hidden', '지역구': 'Hidden', '당선인': 'Hidden', 'photo': 'Hidden', '소속 정당': 'Hidden', '1위': 'Hidden', '2위': 'Hidden', '격차': 'Hidden', });
lyr_j_1.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_d_2.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_y_3.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_s_4.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_c_5.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_i_6.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_km_7.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_g_8.set('fieldLabels', {'지역구': 'header label', '당선인': 'header label', 'photo': 'no label', '소속 정당': 'header label', '1위': 'header label', '2위': 'header label', '격차': 'header label', });
lyr_senkyoku289polygon_9.set('fieldLabels', {});
lyr_senkyoku289polygon_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
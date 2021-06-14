var wms_layers = [];

var format_Campos_y_Malezales_WDPA_0 = new ol.format.GeoJSON();
var features_Campos_y_Malezales_WDPA_0 = format_Campos_y_Malezales_WDPA_0.readFeatures(json_Campos_y_Malezales_WDPA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campos_y_Malezales_WDPA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campos_y_Malezales_WDPA_0.addFeatures(features_Campos_y_Malezales_WDPA_0);
var lyr_Campos_y_Malezales_WDPA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campos_y_Malezales_WDPA_0, 
                style: style_Campos_y_Malezales_WDPA_0,
                interactive: true,
    title: 'Campos_y_Malezales_WDPA<br />\
    <img src="styles/legend/Campos_y_Malezales_WDPA_0_0.png" /> 0 - 0,12<br />\
    <img src="styles/legend/Campos_y_Malezales_WDPA_0_1.png" /> 0,12 - 0,3<br />\
    <img src="styles/legend/Campos_y_Malezales_WDPA_0_2.png" /> 0,3 - 0,53<br />\
    <img src="styles/legend/Campos_y_Malezales_WDPA_0_3.png" /> 0,53 - 0,75<br />\
    <img src="styles/legend/Campos_y_Malezales_WDPA_0_4.png" /> 0,75 - 1<br />'
        });

lyr_Campos_y_Malezales_WDPA_0.setVisible(true);
var layersList = [lyr_Campos_y_Malezales_WDPA_0];
lyr_Campos_y_Malezales_WDPA_0.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'HuellaHum': 'HuellaHum', 'Irr_Aves': 'Irr_Aves', 'Irr_Mam': 'Irr_Mam', 'Irr_Anf': 'Irr_Anf', 'Irr_Art': 'Irr_Art', 'Irr_Rep': 'Irr_Rep', 'Irr_Plan': 'Irr_Plan', 'Amen_Aves': 'Amen_Aves', 'Amen_Mam': 'Amen_Mam', 'Amen_Anf': 'Amen_Anf', 'Amen_Rep': 'Amen_Rep', 'Amen_Plan': 'Amen_Plan', 'Amen_G_sP': 'Amen_G_sP', 'Amen_Glob': 'Amen_Glob', 'Irr_G_sP': 'Irr_G_sP', 'Irr_Glob': 'Irr_Glob', 'G_06': 'G_06', 'G_07': 'G_07', 'G_08': 'G_08', 'G_09': 'G_09', 'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', });
lyr_Campos_y_Malezales_WDPA_0.set('fieldImages', {'GRID_ID': 'TextEdit', 'HuellaHum': 'TextEdit', 'Irr_Aves': 'TextEdit', 'Irr_Mam': 'TextEdit', 'Irr_Anf': 'TextEdit', 'Irr_Art': 'TextEdit', 'Irr_Rep': 'TextEdit', 'Irr_Plan': 'TextEdit', 'Amen_Aves': 'TextEdit', 'Amen_Mam': 'TextEdit', 'Amen_Anf': 'TextEdit', 'Amen_Rep': 'TextEdit', 'Amen_Plan': 'TextEdit', 'Amen_G_sP': 'TextEdit', 'Amen_Glob': 'TextEdit', 'Irr_G_sP': 'TextEdit', 'Irr_Glob': 'TextEdit', 'G_06': 'TextEdit', 'G_07': 'TextEdit', 'G_08': 'TextEdit', 'G_09': 'TextEdit', 'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'TextEdit', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'TextEdit', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', });
lyr_Campos_y_Malezales_WDPA_0.set('fieldLabels', {'GRID_ID': 'inline label', 'HuellaHum': 'header label', 'Irr_Aves': 'no label', 'Irr_Mam': 'no label', 'Irr_Anf': 'no label', 'Irr_Art': 'no label', 'Irr_Rep': 'no label', 'Irr_Plan': 'no label', 'Amen_Aves': 'no label', 'Amen_Mam': 'no label', 'Amen_Anf': 'no label', 'Amen_Rep': 'no label', 'Amen_Plan': 'no label', 'Amen_G_sP': 'no label', 'Amen_Glob': 'no label', 'Irr_G_sP': 'no label', 'Irr_Glob': 'no label', 'G_06': 'no label', 'G_07': 'no label', 'G_08': 'no label', 'G_09': 'no label', 'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', });
lyr_Campos_y_Malezales_WDPA_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
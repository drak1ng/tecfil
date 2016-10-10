/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var itens_atualizados=0;

function update_automoveis(tx){
	tx.executeSql('DROP TABLE IF EXISTS db_automoveis');
	tx.executeSql('CREATE TABLE IF NOT EXISTS db_automoveis ( id TEXT NOT NULL, id_mont TEXT NOT NULL, modelo TEXT NOT NULL, descricao TEXT NOT NULL, motor TEXT NOT NULL, ano_de TEXT NOT NULL, ano_ate TEXT NOT NULL, combustivel TEXT NOT NULL, capacidade_carter TEXT NOT NULL, ar_cabine TEXT NOT NULL, local_loc TEXT NOT NULL, ar_1 TEXT NOT NULL, ar_2 TEXT NOT NULL, lubrificante_1 TEXT NOT NULL, lubrificante_2 TEXT NOT NULL, diesel_1 TEXT NOT NULL, diesel_2 TEXT NOT NULL, direcao TEXT NOT NULL, sedimentador TEXT NOT NULL, imagem TEXT NOT NULL)');

	itens_atualizados = 0;

	$.ajax({
		type: "GET",
		url: "http://homologacao.gruposofape.com.br/tecfil/catalogo/app_api/update.php?id=automoveis.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('automoveis').each(function(){
				var id = $(this).find('id').text();
				var id_mont = $(this).find('id_mont').text();
				var modelo = $(this).find('modelo').text();
				var descricao = $(this).find('descricao').text();
				var motor = $(this).find('motor').text();
				var ano_de = $(this).find('ano_de').text();
				var ano_ate = $(this).find('ano_ate').text();
				var combustivel = $(this).find('combustivel').text();
				var capacidade_carter = $(this).find('capacidade_carter').text();
				var ar_cabine = $(this).find('ar_cabine').text();
				var local_loc = $(this).find('local_loc').text();
				var ar_1 = $(this).find('ar_1').text();
				var ar_2 = $(this).find('ar_2').text();
				var lubrificante_1 = $(this).find('lubrificante_1').text();
				var lubrificante_2 = $(this).find('lubrificante_2').text();
				var diesel_1 = $(this).find('diesel_1').text();
				var diesel_2 = $(this).find('diesel_2').text();
				var direcao = $(this).find('direcao').text();
				var sedimentador = $(this).find('sedimentador').text();
				var imagem = $(this).find('imagem').text();
	
				itens_atualizados++;
				//$("#conteudo_pagina").html(itens_atualizados + " - " + modelo);
				
				tx.executeSql('INSERT INTO db_automoveis (id, id_mont, modelo, descricao, motor, ano_de, ano_ate, combustivel, capacidade_carter, ar_cabine, local_loc, ar_1, ar_2, lubrificante_1, lubrificante_2, diesel_1, diesel_2, direcao, sedimentador, imagem) VALUES ("'+id+'","'+id_mont+'","'+modelo+'","'+descricao+'","'+motor+'","'+ano_de+'","'+ano_ate+'","'+combustivel+'","'+capacidade_carter+'","'+ar_cabine+'","'+local_loc+'","'+ar_1+'","'+ar_2+'","'+lubrificante_1+'","'+lubrificante_2+'","'+diesel_1+'","'+diesel_2+'","'+direcao+'","'+sedimentador+'","'+imagem+'")');
	
			});
			update_caminhoes(tx);
		}
	});
}

function update_caminhoes(tx){
	$.ajax({
		type: "GET",
		url: "http://homologacao.gruposofape.com.br/tecfil/catalogo/app_api/update.php?id=caminhoes.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('caminhoes').each(function(){
				var id = $(this).find('id').text();
				var id_mont = $(this).find('id_mont').text();
				var descricao = $(this).find('descricao').text();
				var motor = $(this).find('motor').text();
				var ano_de = $(this).find('ano_de').text();
				var ano_ate = $(this).find('ano_ate').text();
				var combustivel = $(this).find('combustivel').text();
				var capacidade_carter = $(this).find('capacidade_carter').text();
				var ar_cabine = $(this).find('ar_cabine').text();
				var local_loc = $(this).find('local_loc').text();
				var ar_1 = $(this).find('ar_1').text();
				var ar_2 = $(this).find('ar_2').text();
				var lubrificante_1 = $(this).find('lubrificante_1').text();
				var lubrificante_2 = $(this).find('lubrificante_2').text();
				var diesel_1 = $(this).find('diesel_1').text();
				var diesel_2 = $(this).find('diesel_2').text();
				var direcao = $(this).find('direcao').text();
				var sedimentador = $(this).find('sedimentador').text();
				var desumidificador = $(this).find('desumidificador').text();
				var agua = $(this).find('agua').text();
				var bypass = $(this).find('bypass').text();
				var transmissao = $(this).find('transmissao').text();
				var outros = $(this).find('outros').text();
				var outros2 = $(this).find('outros2').text();
				var outros3 = $(this).find('outros3').text();
				var imagem = $(this).find('imagem').text();
	
				itens_atualizados++;
				//$("#conteudo_pagina").html(itens_atualizados + " - " + motor);
	
			});
			update_onibus(tx);
		}
	});
}

function update_onibus(tx){
	$.ajax({
		type: "GET",
		url: "http://homologacao.gruposofape.com.br/tecfil/catalogo/app_api/update.php?id=onibus.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('onibus').each(function(){
				var id = $(this).find('id').text();
				var id_mont = $(this).find('id_mont').text();
				var modelo = $(this).find('modelo').text();
				var descricao = $(this).find('descricao').text();
				var motor = $(this).find('motor').text();
				var ano_de = $(this).find('ano_de').text();
				var ano_ate = $(this).find('ano_ate').text();
				var combustivel = $(this).find('combustivel').text();
				var capacidade_carter = $(this).find('capacidade_carter').text();
				var ar_cabine = $(this).find('ar_cabine').text();
				var local_loc = $(this).find('local_loc').text();
				var ar_1 = $(this).find('ar_1').text();
				var ar_2 = $(this).find('ar_2').text();
				var lubrificante_1 = $(this).find('lubrificante_1').text();
				var lubrificante_2 = $(this).find('lubrificante_2').text();
				var diesel_1 = $(this).find('diesel_1').text();
				var diesel_2 = $(this).find('diesel_2').text();
				var direcao = $(this).find('direcao').text();
				var sedimentador = $(this).find('sedimentador').text();
				var desumidificador = $(this).find('desumidificador').text();
				var agua = $(this).find('agua').text();
				var bypass = $(this).find('bypass').text();
				var transmissao = $(this).find('transmissao').text();
				var outros = $(this).find('outros').text();
				var outros2 = $(this).find('outros2').text();
				var outros3 = $(this).find('outros3').text();
				var imagem = $(this).find('imagem').text();
	
				itens_atualizados++;
				//$("#conteudo_pagina").html(itens_atualizados + " - " + modelo);
	
			});
			update_tratores(tx);
		}
	});
}

function update_tratores(tx){
	$.ajax({
		type: "GET",
		url: "http://homologacao.gruposofape.com.br/tecfil/catalogo/app_api/update.php?id=tratores.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('tratores').each(function(){
				var id = $(this).find('id').text();
				var id_mont = $(this).find('id_mont').text();
				var modelo = $(this).find('modelo').text();
				var motor = $(this).find('motor').text();
				var ano = $(this).find('ano').text();
				var ar_1 = $(this).find('ar_1').text();
				var ar_2 = $(this).find('ar_2').text();
				var lubrificante = $(this).find('lubrificante').text();
				var combustivel_1 = $(this).find('combustivel_1').text();
				var combustivel_2 = $(this).find('combustivel_2').text();
				var direcao = $(this).find('direcao').text();
				var transmissao_int = $(this).find('transmissao_int').text();
				var transmissao_ext = $(this).find('transmissao_ext').text();
				var outros = $(this).find('outros').text();
				var outros2 = $(this).find('outros2').text();
				var outros3 = $(this).find('outros3').text();
				var capacidade_carter = $(this).find('capacidade_carter').text();
				var imagem = $(this).find('imagem').text();
	
				itens_atualizados++;
				//$("#conteudo_pagina").html(itens_atualizados + " - " + modelo);
	
			});
			update_colheitadeiras(tx);
		}
	});
}

function update_colheitadeiras(tx){
	$.ajax({
		type: "GET",
		url: "http://homologacao.gruposofape.com.br/tecfil/catalogo/app_api/update.php?id=colheitadeiras.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('colheitadeiras').each(function(){
				var id = $(this).find('id').text();
				var id_mont = $(this).find('id_mont').text();
				var modelo = $(this).find('modelo').text();
				var motor = $(this).find('motor').text();
				var ano = $(this).find('ano').text();
				var ar_1 = $(this).find('ar_1').text();
				var ar_2 = $(this).find('ar_2').text();
				var lubrificante = $(this).find('lubrificante').text();
				var combustivel_1 = $(this).find('combustivel_1').text();
				var combustivel_2 = $(this).find('combustivel_2').text();
				var hidraulico_int = $(this).find('hidraulico_int').text();
				var hidraulico_ext = $(this).find('hidraulico_ext').text();
				var outros = $(this).find('outros').text();
				var outros2 = $(this).find('outros2').text();
				var outros3 = $(this).find('outros3').text();
				var capacidade_carter = $(this).find('capacidade_carter').text();
				var imagem = $(this).find('imagem').text();
	
				itens_atualizados++;
				//$("#conteudo_pagina").html(itens_atualizados + " - " + modelo);
	
			});
			update_motocicletas(tx);
		}
	});
}

function update_motocicletas(tx){
	$.ajax({
		type: "GET",
		url: "http://homologacao.gruposofape.com.br/tecfil/catalogo/app_api/update.php?id=motocicletas.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('motos').each(function(){
				var id = $(this).find('id').text();
				var id_mont = $(this).find('id_mont').text();
				var modelo = $(this).find('modelo').text();
				var ano = $(this).find('ano').text();
				var ar = $(this).find('ar').text();
				var oleo = $(this).find('oleo').text();
				var combustivel = $(this).find('combustivel').text();
				var imagem = $(this).find('imagem').text();
	
				itens_atualizados++;
				//$("#conteudo_pagina").html(itens_atualizados + " - " + modelo);
	
			});
			update_maquinasEquipamentos(tx);
		}
	});
}

function update_maquinasEquipamentos(tx){
	$.ajax({
		type: "GET",
		url: "http://homologacao.gruposofape.com.br/tecfil/catalogo/app_api/update.php?id=maquinasEquipamentos.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('equipamentos').each(function(){
				var id = $(this).find('id').text();
				var id_mont = $(this).find('id_mont').text();
				var modelo = $(this).find('modelo').text();
				var motor = $(this).find('motor').text();
				var ano = $(this).find('ano').text();
				var ar_1 = $(this).find('ar_1').text();
				var ar_2 = $(this).find('ar_2').text();
				var lubrificante = $(this).find('lubrificante').text();
				var bypass = $(this).find('bypass').text();
				var combustivel_1 = $(this).find('combustivel_1').text();
				var combustivel_2 = $(this).find('combustivel_2').text();
				var hidraulico = $(this).find('hidraulico').text();
				var direcao = $(this).find('direcao').text();
				var agua = $(this).find('agua').text();
				var outros = $(this).find('outros').text();
				var outros2 = $(this).find('outros2').text();
				var outros3 = $(this).find('outros3').text();
				var capacidade_carter = $(this).find('capacidade_carter').text();
				var imagem = $(this).find('imagem').text();
	
				itens_atualizados++;
				//$("#conteudo_pagina").html(itens_atualizados + " - " + modelo);
	
			});
			update_concluido(tx);
		}
	});
}

function update_concluido(tx){
	alert("Atualizacao Concluida");
}
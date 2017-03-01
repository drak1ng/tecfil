
function carregarIdioma(){

	var sistema_idioma = window.localStorage.getItem('language_sistema');
	var sistema_idioma_array = sistema_idioma.split("-");
	
	if(sistema_idioma_array[0]=="pt"){
		
		window.localStorage.setItem('linguage_001','As informações foram atualizadas!');
		window.localStorage.setItem('linguage_002','E-mail');
		window.localStorage.setItem('linguage_003','Senha');
		window.localStorage.setItem('linguage_004','Acessar');
		window.localStorage.setItem('linguage_005','Esqueci minha senha');
		window.localStorage.setItem('linguage_006','Criar uma nova conta');
		window.localStorage.setItem('linguage_007','O campo E-mail deve ser preenchido');
		window.localStorage.setItem('linguage_008','O campo Senha deve ser preenchido');
		window.localStorage.setItem('linguage_009','O E-mail ou a Senha utilizados não são válidos');
		window.localStorage.setItem('linguage_010','Nome Completo');
		window.localStorage.setItem('linguage_011','Empresa');
		window.localStorage.setItem('linguage_012','Telefone');
		window.localStorage.setItem('linguage_013','Quero me Cadastrar');
		window.localStorage.setItem('linguage_014','Voltar');
		window.localStorage.setItem('linguage_015','O campo Nome deve ser preenchido');
		window.localStorage.setItem('linguage_016','O campo Empresa deve ser preenchido');
		window.localStorage.setItem('linguage_017','O campo Telefone deve ser preenchido');
		window.localStorage.setItem('linguage_018','Esse E-mail já foi utilizado em outro Cadastro');
		window.localStorage.setItem('linguage_019','Não foi possuível concluir o seu cadastro, tente novamente mais tarde!');
		window.localStorage.setItem('linguage_020','<b>CADASTRE-SE</b>');
		window.localStorage.setItem('linguage_021','Preencha todos os campos abaixo para se cadastrar e ter acesso ao nosso catálogo de produtos.');
		window.localStorage.setItem('linguage_022','<b>SUCESSO!</b>');
		window.localStorage.setItem('linguage_023','Cadastro realizado com sucesso!<br><br>Você já pode continuar e<br>acessar o nosso catálogo.');
		window.localStorage.setItem('linguage_024','Acessar Catálogo');
		window.localStorage.setItem('linguage_025','<b>RECUPERAR</b>');
		window.localStorage.setItem('linguage_026','<h3 style="color:#000;">Esqueci minha senha</h3>Utilize o campo abaixo para informar o Email utilizado no cadastro e iremos enviar sua senha.');
		window.localStorage.setItem('linguage_027','Enviar senha por e-mail');
		window.localStorage.setItem('linguage_028','Não foi encontrado nenhum cadastro com esse E-mail!');
		window.localStorage.setItem('linguage_029','E-mail enviado com sucesso!<br>Em breve você recebera por e-mail, um link para cadastrar uma nova senha.');
		window.localStorage.setItem('linguage_030','<b>FILTRAR</b>');
		window.localStorage.setItem('linguage_031','Buscar');
		window.localStorage.setItem('linguage_032','Lançamentos');
		window.localStorage.setItem('linguage_033','Notícias');
		window.localStorage.setItem('linguage_034','Contato');
		window.localStorage.setItem('linguage_035','Filtrando por');
		window.localStorage.setItem('linguage_036','Montadora');
		window.localStorage.setItem('linguage_037','Automóveis');
		window.localStorage.setItem('linguage_038','Caminhões');
		window.localStorage.setItem('linguage_039','Ônibus');
		window.localStorage.setItem('linguage_040','Tratores');
		window.localStorage.setItem('linguage_041','Motocicletas');
		window.localStorage.setItem('linguage_042','Máquinas e Equipamentos');
		window.localStorage.setItem('linguage_043','Conversão Direta');
		window.localStorage.setItem('linguage_044','<b>CONTATO</b>');
		window.localStorage.setItem('linguage_045','Contato');
		window.localStorage.setItem('linguage_046','Mensagem');
		window.localStorage.setItem('linguage_047','Enviar Mensagem');
		window.localStorage.setItem('linguage_048','<option value="">Área de Interesse</option><option value=""></option><option value="atendimento">Atendimento</option><option value="comercial">Comercial</option><option value="vendas01">Vendas Reposição</option><option value="vendas02">Vendas Exportação</option><option value="vendas03">Vendas Montadoras</option><option value="marketing">Marketing</option><option value="compras">Compras</option><option value="assistencia">Assistência Técnica</option><option value="rh">Recursos Humanos</option>');
		window.localStorage.setItem('linguage_049','O campo Área de Interesse deve ser preenchido');
		window.localStorage.setItem('linguage_050','O campo Mensagem deve ser preenchido');
		window.localStorage.setItem('linguage_051','Não foi possuível enviar sua mensagem, tente novamente mais tarde!');
		window.localStorage.setItem('linguage_052','Você precisa de acesso a internet para enviar sua mensagem.');
		window.localStorage.setItem('linguage_053','Sua mensagem foi enviada com sucesso.<br>Em breve entraremos em contato.');
		window.localStorage.setItem('linguage_054','<b>CATÁLOGO TECFIL</b>');
		window.localStorage.setItem('linguage_055','Sair do Aplicativo');
		window.localStorage.setItem('linguage_056','<b>NOTÍCIAS</b>');
		window.localStorage.setItem('linguage_057','Aguarde carregando...');
		window.localStorage.setItem('linguage_058','Você precisa de acesso a internet para visualizar suas mensagens.');
		window.localStorage.setItem('linguage_059','<b>LANÇAMENTOS</b>');
		window.localStorage.setItem('linguage_060','Você precisa de acesso a internet para visualizar as novidades.');
		window.localStorage.setItem('linguage_061','MODELO');
		window.localStorage.setItem('linguage_062','MOTOR');
		window.localStorage.setItem('linguage_063','ANO DE');
		window.localStorage.setItem('linguage_064','ANO ATÉ');
		window.localStorage.setItem('linguage_065','ANO');
		window.localStorage.setItem('linguage_066','DESCRIÇÃO');
		window.localStorage.setItem('linguage_067','COMBUSTÍVEL');
		window.localStorage.setItem('linguage_068','CAP. CÁRTER');
		window.localStorage.setItem('linguage_069','FILTRO CABINE');
		window.localStorage.setItem('linguage_070','LOCAL CABINE');
		window.localStorage.setItem('linguage_071','AR 1');
		window.localStorage.setItem('linguage_072','AR 2');
		window.localStorage.setItem('linguage_073','LUBR. 1');
		window.localStorage.setItem('linguage_074','LUBR. 2');
		window.localStorage.setItem('linguage_075','COMBUS. 1');
		window.localStorage.setItem('linguage_076','COMBUS. 2');
		window.localStorage.setItem('linguage_077','DIREÇÃO');
		window.localStorage.setItem('linguage_078','SEDIMENTADOR');
		window.localStorage.setItem('linguage_079','DESUMIDIFICADOR');
		window.localStorage.setItem('linguage_080','ÁGUA');
		window.localStorage.setItem('linguage_081','BYPASS');
		window.localStorage.setItem('linguage_082','TRANSMISSÃO');
		window.localStorage.setItem('linguage_083','OUTROS');
		window.localStorage.setItem('linguage_084','OUTROS 2');
		window.localStorage.setItem('linguage_085','OUTROS 3');
		window.localStorage.setItem('linguage_086','LUBRIFICANTE');
		window.localStorage.setItem('linguage_087','TRANSMISSÃO INT');
		window.localStorage.setItem('linguage_088','TRANSMISSÃO EXT');
		window.localStorage.setItem('linguage_089','HIDRÁULICO');
		window.localStorage.setItem('linguage_090','FILTRO');
		window.localStorage.setItem('linguage_091','CONCORRENTE');
		window.localStorage.setItem('linguage_092','CÓDIGO');
		window.localStorage.setItem('linguage_093','FORA DE LINHA');
		window.localStorage.setItem('linguage_094','Código');
		window.localStorage.setItem('linguage_095','Original');
		window.localStorage.setItem('linguage_096','Caixa');
		window.localStorage.setItem('linguage_097','Elemento');
		window.localStorage.setItem('linguage_098','Altura');
		window.localStorage.setItem('linguage_099','Dia. Ext. Comp.');
		window.localStorage.setItem('linguage_100','Dia. Int. Larg.');
		window.localStorage.setItem('linguage_101','Peso Bruto/Kg');
		window.localStorage.setItem('linguage_102','Peso Líquido/Kg');
		window.localStorage.setItem('linguage_103','Rosca');
		window.localStorage.setItem('linguage_104','Válvula Anti-Retorno');
		window.localStorage.setItem('linguage_105','Válvula Alívio');
		
	}else if(sistema_idioma_array[0]=="es"){
		
		window.localStorage.setItem('linguage_001','La información se actualiza!');
		window.localStorage.setItem('linguage_002','Correo Electrónico');
		window.localStorage.setItem('linguage_003','Contraseña');
		window.localStorage.setItem('linguage_004','Acceso');
		window.localStorage.setItem('linguage_005','Contraseña perdida');
		window.localStorage.setItem('linguage_006','Crear una cuenta nueva');
		window.localStorage.setItem('linguage_007','El campo de correo electrónico debe ser llenado');
		window.localStorage.setItem('linguage_008','El campo de contraseña debe ser llenado');
		window.localStorage.setItem('linguage_009','Correo electrónico o contraseña utilizada no son válidos');
		window.localStorage.setItem('linguage_010','Nombre Completo');
		window.localStorage.setItem('linguage_011','Empresa');
		window.localStorage.setItem('linguage_012','Teléfono');
		window.localStorage.setItem('linguage_013','Quiero Inscribirse');
		window.localStorage.setItem('linguage_014','Retorno');
		window.localStorage.setItem('linguage_015','El campo Nombre debe ser llenado');
		window.localStorage.setItem('linguage_016','El campo Empresa debe ser llenado');
		window.localStorage.setItem('linguage_017','El campo Teléfono debe ser llenado');
		window.localStorage.setItem('linguage_018','Este correo electrónico ha sido utilizada en otro Registro');
		window.localStorage.setItem('linguage_019','No se pudo completar su registro, por favor inténtelo de nuevo más tarde!');
		window.localStorage.setItem('linguage_020','<b>REGISTRO</b>');
		window.localStorage.setItem('linguage_021','Rellene todos los campos para registrar y tener acceso a nuestro catálogo de productos.');
		window.localStorage.setItem('linguage_022','<b>ÉXITO!</b>');
		window.localStorage.setItem('linguage_023','Registro completado!<br><br>Ahora puede continuar<br>acceder a nuestro catálogo.');
		window.localStorage.setItem('linguage_024','Acceso Catálogo');
		window.localStorage.setItem('linguage_025','<b>RECUPERAR</b>');
		window.localStorage.setItem('linguage_026','<h3 style="color:#000;">Contraseña perdida</h3>Utilice el campo de abajo para entrar en el correo electrónico que utilizó para registrarse y le enviaremos su contraseña.');
		window.localStorage.setItem('linguage_027','Enviar contraseña por correo electrónico');
		window.localStorage.setItem('linguage_028','No se encontraron eventos para este E-mail!');
		window.localStorage.setItem('linguage_029','Email enviado con éxito!<br>Pronto recibirá por correo electrónico un enlace a registrar una contraseña nueva.');
		window.localStorage.setItem('linguage_030','<b>FILTRO</b>');
		window.localStorage.setItem('linguage_031','Búsqueda');
		window.localStorage.setItem('linguage_032','Comunicados');
		window.localStorage.setItem('linguage_033','Noticias');
		window.localStorage.setItem('linguage_034','Contacto');
		window.localStorage.setItem('linguage_035','Filtrado por');
		window.localStorage.setItem('linguage_036','Montadora');
		window.localStorage.setItem('linguage_037','Automóviles');
		window.localStorage.setItem('linguage_038','Camiones');
		window.localStorage.setItem('linguage_039','Autobuses');
		window.localStorage.setItem('linguage_040','Tractores');
		window.localStorage.setItem('linguage_041','Motocicletas');
		window.localStorage.setItem('linguage_042','Máquinas y Equips');
		window.localStorage.setItem('linguage_043','Conversión Directa');
		window.localStorage.setItem('linguage_044','<b>CONTACTO</b>');
		window.localStorage.setItem('linguage_045','Contacto');
		window.localStorage.setItem('linguage_046','Mensaje');
		window.localStorage.setItem('linguage_047','Enviar mensaje');
		window.localStorage.setItem('linguage_048','<option value="">Area de interes</option><option value=""></option><option value="atendimento">Tratamiento</option><option value="comercial">Comercial</option><option value="vendas01">Reemplazo de Ventas</option><option value="vendas02">Ventas de Exportación</option><option value="vendas03">Fabricantes de Automóviles de Ventas</option><option value="marketing">Mercadeo</option><option value="compras">Compras</option><option value="assistencia">Asistencia Técnica</option><option value="rh">Recursos Humanos</option>');
		window.localStorage.setItem('linguage_049','El campo de Área de interés debe ser llenado');
		window.localStorage.setItem('linguage_050','El campo de mensaje debe ser llenado');
		window.localStorage.setItem('linguage_051','Sin possuível enviar su mensaje, por favor intente de nuevo más tarde!');
		window.localStorage.setItem('linguage_052','Es necesario tener acceso a Internet para enviar su mensaje.');
		window.localStorage.setItem('linguage_053','Su mensaje fue enviado con éxito.<br>Pronto nos pondremos en contacto con usted.');
		window.localStorage.setItem('linguage_054','<b>CATÁLOGO TECFIL</b>');
		window.localStorage.setItem('linguage_055','Salir de la aplicación');
		window.localStorage.setItem('linguage_056','<b>NOTICIAS</b>');
		window.localStorage.setItem('linguage_057','Espere cargando...');
		window.localStorage.setItem('linguage_058','Es necesario tener acceso a Internet para ver sus mensajes.');
		window.localStorage.setItem('linguage_059','<b>COMUNICADOS</b>');
		window.localStorage.setItem('linguage_060','Es necesario tener acceso a Internet para ver las noticias.');
		window.localStorage.setItem('linguage_061','MODELO');
		window.localStorage.setItem('linguage_062','MOTOR');
		window.localStorage.setItem('linguage_063','DESDE');
		window.localStorage.setItem('linguage_064','ASTA');
		window.localStorage.setItem('linguage_065','AÑO');
		window.localStorage.setItem('linguage_066','DESCRIPCIÓN');
		window.localStorage.setItem('linguage_067','COMBUSTIBLE');
		window.localStorage.setItem('linguage_068','CAP. CÁRTER');
		window.localStorage.setItem('linguage_069','FILTRO CABINA');
		window.localStorage.setItem('linguage_070','LOCAL CABINA');
		window.localStorage.setItem('linguage_071','AR 1');
		window.localStorage.setItem('linguage_072','AR 2');
		window.localStorage.setItem('linguage_073','LUBR. 1');
		window.localStorage.setItem('linguage_074','LUBR. 2');
		window.localStorage.setItem('linguage_075','COMBUS. 1');
		window.localStorage.setItem('linguage_076','COMBUS. 2');
		window.localStorage.setItem('linguage_077','DIRECCIÓN');
		window.localStorage.setItem('linguage_078','SEDIMENTADOR');
		window.localStorage.setItem('linguage_079','DEHUMIDIFIER');
		window.localStorage.setItem('linguage_080','AGUA');
		window.localStorage.setItem('linguage_081','BYPASS');
		window.localStorage.setItem('linguage_082','TRANSMISIÓN');
		window.localStorage.setItem('linguage_083','OTROS');
		window.localStorage.setItem('linguage_084','OTROS 2');
		window.localStorage.setItem('linguage_085','OTROS 3');
		window.localStorage.setItem('linguage_086','LUBRICANTE');
		window.localStorage.setItem('linguage_087','TRANSMISIÓN INT');
		window.localStorage.setItem('linguage_088','TRANSMISIÓN EXT');
		window.localStorage.setItem('linguage_089','HIDRÁULICO');
		window.localStorage.setItem('linguage_090','FILTRO');
		window.localStorage.setItem('linguage_091','COMPETIDOR');
		window.localStorage.setItem('linguage_092','CÓDIGO');
		window.localStorage.setItem('linguage_093','FUR DE LÍNEA');
		window.localStorage.setItem('linguage_094','Código');
		window.localStorage.setItem('linguage_095','Original');
		window.localStorage.setItem('linguage_096','Caja');
		window.localStorage.setItem('linguage_097','Elemento');
		window.localStorage.setItem('linguage_098','Altura');
		window.localStorage.setItem('linguage_099','Dia. Ext. Comp.');
		window.localStorage.setItem('linguage_100','Dia. Int. Larg.');
		window.localStorage.setItem('linguage_101','Peso Bruto/Kg');
		window.localStorage.setItem('linguage_102','Peso Neto/Kg');
		window.localStorage.setItem('linguage_103','Rosca');
		window.localStorage.setItem('linguage_104','Válvula Antiretorno');
		window.localStorage.setItem('linguage_105','Válvula Alívio');
		
	}else{
		
		window.localStorage.setItem('linguage_001','As informações foram atualizadas!');
		window.localStorage.setItem('linguage_002','E-mail');
		window.localStorage.setItem('linguage_003','Senha');
		window.localStorage.setItem('linguage_004','Acessar');
		window.localStorage.setItem('linguage_005','Esqueci minha senha');
		window.localStorage.setItem('linguage_006','Criar uma nova conta');
		window.localStorage.setItem('linguage_007','O campo E-mail deve ser preenchido');
		window.localStorage.setItem('linguage_008','O campo Senha deve ser preenchido');
		window.localStorage.setItem('linguage_009','O E-mail ou a Senha utilizados não são válidos');
		window.localStorage.setItem('linguage_010','Nome Completo');
		window.localStorage.setItem('linguage_011','Empresa');
		window.localStorage.setItem('linguage_012','Telefone');
		window.localStorage.setItem('linguage_013','Quero me Cadastrar');
		window.localStorage.setItem('linguage_014','Voltar');
		window.localStorage.setItem('linguage_015','O campo Nome deve ser preenchido');
		window.localStorage.setItem('linguage_016','O campo Empresa deve ser preenchido');
		window.localStorage.setItem('linguage_017','O campo Telefone deve ser preenchido');
		window.localStorage.setItem('linguage_018','Esse E-mail já foi utilizado em outro Cadastro');
		window.localStorage.setItem('linguage_019','Não foi possuível concluir o seu cadastro, tente novamente mais tarde!');
		window.localStorage.setItem('linguage_020','<b>CADASTRE-SE</b>');
		window.localStorage.setItem('linguage_021','Preencha todos os campos abaixo para se cadastrar e ter acesso ao nosso catálogo de produtos.');
		window.localStorage.setItem('linguage_022','<b>SUCESSO!</b>');
		window.localStorage.setItem('linguage_023','Cadastro realizado com sucesso!<br><br>Você já pode continuar e<br>acessar o nosso catálogo.');
		window.localStorage.setItem('linguage_024','Acessar Catálogo');
		window.localStorage.setItem('linguage_025','<b>RECUPERAR</b>');
		window.localStorage.setItem('linguage_026','<h3 style="color:#000;">Esqueci minha senha</h3>Utilize o campo abaixo para informar o Email utilizado no cadastro e iremos enviar sua senha.');
		window.localStorage.setItem('linguage_027','Enviar senha por e-mail');
		window.localStorage.setItem('linguage_028','Não foi encontrado nenhum cadastro com esse E-mail!');
		window.localStorage.setItem('linguage_029','E-mail enviado com sucesso!<br>Em breve você recebera por e-mail, um link para cadastrar uma nova senha.');
		window.localStorage.setItem('linguage_030','<b>FILTRAR</b>');
		window.localStorage.setItem('linguage_031','Buscar');
		window.localStorage.setItem('linguage_032','Lançamentos');
		window.localStorage.setItem('linguage_033','Notícias');
		window.localStorage.setItem('linguage_034','Contato');
		window.localStorage.setItem('linguage_035','Filtrando por');
		window.localStorage.setItem('linguage_036','Montadora');
		window.localStorage.setItem('linguage_037','Automóveis');
		window.localStorage.setItem('linguage_038','Caminhões');
		window.localStorage.setItem('linguage_039','Ônibus');
		window.localStorage.setItem('linguage_040','Tratores');
		window.localStorage.setItem('linguage_041','Motocicletas');
		window.localStorage.setItem('linguage_042','Máquinas e Equipamentos');
		window.localStorage.setItem('linguage_043','Conversão Direta');
		window.localStorage.setItem('linguage_044','<b>CONTATO</b>');
		window.localStorage.setItem('linguage_045','Contato');
		window.localStorage.setItem('linguage_046','Mensagem');
		window.localStorage.setItem('linguage_047','Enviar Mensagem');
		window.localStorage.setItem('linguage_048','<option value="">Área de Interesse</option><option value=""></option><option value="atendimento">Atendimento</option><option value="comercial">Comercial</option><option value="vendas01">Vendas Reposição</option><option value="vendas02">Vendas Exportação</option><option value="vendas03">Vendas Montadoras</option><option value="marketing">Marketing</option><option value="compras">Compras</option><option value="assistencia">Assistência Técnica</option><option value="rh">Recursos Humanos</option>');
		window.localStorage.setItem('linguage_049','O campo Área de Interesse deve ser preenchido');
		window.localStorage.setItem('linguage_050','O campo Mensagem deve ser preenchido');
		window.localStorage.setItem('linguage_051','Não foi possuível enviar sua mensagem, tente novamente mais tarde!');
		window.localStorage.setItem('linguage_052','Você precisa de acesso a internet para enviar sua mensagem.');
		window.localStorage.setItem('linguage_053','Sua mensagem foi enviada com sucesso.<br>Em breve entraremos em contato.');
		window.localStorage.setItem('linguage_054','<b>CATÁLOGO TECFIL</b>');
		window.localStorage.setItem('linguage_055','Sair do Aplicativo');
		window.localStorage.setItem('linguage_056','<b>NOTÍCIAS</b>');
		window.localStorage.setItem('linguage_057','Aguarde carregando...');
		window.localStorage.setItem('linguage_058','Você precisa de acesso a internet para visualizar suas mensagens.');
		window.localStorage.setItem('linguage_059','<b>LANÇAMENTOS</b>');
		window.localStorage.setItem('linguage_060','Você precisa de acesso a internet para visualizar as novidades.');
		window.localStorage.setItem('linguage_061','MODELO');
		window.localStorage.setItem('linguage_062','MOTOR');
		window.localStorage.setItem('linguage_063','ANO DE');
		window.localStorage.setItem('linguage_064','ANO ATÉ');
		window.localStorage.setItem('linguage_065','ANO');
		window.localStorage.setItem('linguage_066','DESCRIÇÃO');
		window.localStorage.setItem('linguage_067','COMBUSTÍVEL');
		window.localStorage.setItem('linguage_068','CAP. CÁRTER');
		window.localStorage.setItem('linguage_069','FILTRO CABINE');
		window.localStorage.setItem('linguage_070','LOCAL CABINE');
		window.localStorage.setItem('linguage_071','AR 1');
		window.localStorage.setItem('linguage_072','AR 2');
		window.localStorage.setItem('linguage_073','LUBR. 1');
		window.localStorage.setItem('linguage_074','LUBR. 2');
		window.localStorage.setItem('linguage_075','COMBUS. 1');
		window.localStorage.setItem('linguage_076','COMBUS. 2');
		window.localStorage.setItem('linguage_077','DIREÇÃO');
		window.localStorage.setItem('linguage_078','SEDIMENTADOR');
		window.localStorage.setItem('linguage_079','DESUMIDIFICADOR');
		window.localStorage.setItem('linguage_080','ÁGUA');
		window.localStorage.setItem('linguage_081','BYPASS');
		window.localStorage.setItem('linguage_082','TRANSMISSÃO');
		window.localStorage.setItem('linguage_083','OUTROS');
		window.localStorage.setItem('linguage_084','OUTROS 2');
		window.localStorage.setItem('linguage_085','OUTROS 3');
		window.localStorage.setItem('linguage_086','LUBRIFICANTE');
		window.localStorage.setItem('linguage_087','TRANSMISSÃO INT');
		window.localStorage.setItem('linguage_088','TRANSMISSÃO EXT');
		window.localStorage.setItem('linguage_089','HIDRÁULICO');
		window.localStorage.setItem('linguage_090','FILTRO');
		window.localStorage.setItem('linguage_091','CONCORRENTE');
		window.localStorage.setItem('linguage_092','CÓDIGO');
		window.localStorage.setItem('linguage_093','FORA DE LINHA');
		window.localStorage.setItem('linguage_094','Código');
		window.localStorage.setItem('linguage_095','Original');
		window.localStorage.setItem('linguage_096','Caixa');
		window.localStorage.setItem('linguage_097','Elemento');
		window.localStorage.setItem('linguage_098','Altura');
		window.localStorage.setItem('linguage_099','Dia. Ext. Comp.');
		window.localStorage.setItem('linguage_100','Dia. Int. Larg.');
		window.localStorage.setItem('linguage_101','Peso Bruto/Kg');
		window.localStorage.setItem('linguage_102','Peso Líquido/Kg');
		window.localStorage.setItem('linguage_103','Rosca');
		window.localStorage.setItem('linguage_104','Válvula Anti-Retorno');
		window.localStorage.setItem('linguage_105','Válvula Alívio');
		
	}
	
}
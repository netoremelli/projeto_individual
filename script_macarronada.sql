create database macarronada;
use macarronada;

CREATE TABLE usuarios (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) DEFAULT NULL,
  email VARCHAR(45) DEFAULT NULL,
  senha VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (idUsuario)
);
CREATE TABLE receitas (
  idReceita INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (idReceita)
);
CREATE TABLE ingredientes (
  idIngrediente INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (idIngrediente)
);
CREATE TABLE buscados (
  idBuscado INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (idBuscado)
);
CREATE TABLE ingredienteBuscado (
  idIngredienteBuscado INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (idIngredienteBuscado)
);
CREATE TABLE receitaBuscada (
  idReceitaBuscada INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (idReceitaBuscada)
);
CREATE TABLE instrucoes (
  idInstrucao INT NOT NULL AUTO_INCREMENT,
  instrucoes VARCHAR(10000) DEFAULT NULL,
  fkReceita INT DEFAULT NULL,
  PRIMARY KEY (idInstrucao),
  FOREIGN KEY (fkReceita) REFERENCES receitas(idReceita)
);
CREATE TABLE quantidades (
  idQuantidade INT NOT NULL,
  fkIngrediente INT NOT NULL,
  fkReceita INT NOT NULL,
  quantidade VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (idQuantidade, fkIngrediente, fkReceita),
  FOREIGN KEY (fkIngrediente) REFERENCES ingredientes(idIngrediente),
  FOREIGN KEY (fkReceita) REFERENCES receitas(idReceita)
);
insert into ingredientes (idIngrediente, nome) values
(1, 'Manteiga'),
(2, 'Ovos'),
(3, 'Açúcar cristal'),
(4, 'Açúcar mascavo'),
(5, 'Sal'),
(6, 'Bicarbonato de sódio'),
(7, 'Farinha'),
(8, 'Pasta de baunilha'),
(9, 'Leite em pó'),
(10, 'Óleo'),
(11, 'Leite'),
(12, 'Fubá'),
(13, 'Chocolate amargo'),
(14, 'Cacau em pó'),
(15, 'Polvilho azedo'),
(16, 'Polvilho doce'),
(17, 'Fermento em pó'),
(18, 'Chocolate em pó'),
(19, 'Café coado'),
(20, 'Creme de leite fresco'),
(21, 'Gemas'),
(22, 'Claras'),
(23, 'Mascarpone'),
(24, 'Bolacha champanhe'),
(25, 'Fermento biológico'),
(26, 'Chocolate branco'),
(27, 'Chocolate ao leite'),
(28, 'Ovo'),
(29, 'Água'),
(30, 'Suco de laranja'),
(31, 'Fraldinha'),
(32, 'Cebolas'),
(33, 'Cenouras'),
(34, 'Alho'),
(35, 'Tomates'),
(36, 'Cerveja pilsen'),
(37, 'Caldo de galinha'),
(38, 'Arroz'),
(39, 'Macarrão rigatoni'),
(40, 'Linguiça'),
(41, 'Extrato de tomate'),
(42, 'Mostarda'),
(43, 'Molho inglês'),
(44, 'Folha de louro'),
(45, 'Peito de frango'),
(46, 'Tomate pelado'),
(47, 'Parmesão'),
(48, 'Canela'),
(49, 'Bananas'),
(50, 'Gengibre em pó'),
(51, 'Cravo em pó'),
(52, 'Laranja'),
(53, 'Castanha do pará'),
(54, 'Cachaça'),
(55, 'Farinha de amêndoas'),
(56, 'Açúcar de confeiteiro'),
(57, 'Leite condensado'),
(58, 'Noz moscada'),
(59, 'Catupiry'),
(60, 'Muçarela'),
(61, 'Presunto'),
(62, 'Tomilho'),
(63, 'Vinho tinto'),
(64, 'Acém'),
(65, 'Alho poró'),
(66, 'Páprica doce');
insert into receitas (idReceita, nome) values
(1, 'Cookies de chocolate branco'),
(2, 'Brownie'),
(3, 'Bolo de chocolate com café'),
(4, 'Pão de leite (Shokupan)'),
(5, 'Bolo de fubá'),
(6, 'Tiramisu'),
(7, 'Pavê de sonho de valsa'),
(8, 'Arroz com fraldinha'),
(9, 'Macarrão com linguiça'),
(10, 'Estrogonofe de frango'),
(11, 'Rolinho de canela'),
(12, 'Bolo de banana'),
(13, 'Bolo de laranja com castanha do pará'),
(14, 'Mousse de chocolate'),
(15, 'Financier'),
(16, 'Biscoito de dedão'),
(17, 'Fricasse de frango'),
(18, 'Cookies de brownie'),
(19, 'Petit gateau'),
(20, 'Joelho de presunto e queijo'),
(21, 'Pudim de leite condensado'),
(22, 'Doce de leite'),
(23, 'Carne de panela'),
(24, 'Macarrão de panela de pressão'),
(25, 'Pavê de sonho de valsa'),
(26, 'Bife na cerveja'),
(27, 'Bolinho de chuva');
insert into instrucoes (idInstrucao, instrucoes, fkReceita) values
(1, 'Coloque o leite em pó numa panela e toste o leite em pó até ficar levemente dourado, derreta a manteiga numa panela e cozinha até que a manteiga doure, misture aos dois açúcares, ao bicarbonato de sódio e ao sal. Misture até que a manteiga se misture aos outros ingredientes e deixe esfriar. Depois que estiver levemente morno, acrescente o ovo e a baunilha, e bata até que fique homogêneo. Incorpore a farinha, e quando ela estiver quase homogênea, acrescente o chocolate branco picado. Divida em 8 partes e formate levemente como bolas. Asse em forno pré-aquecido a 180º por 15-20 minutos, estarão prontos quando as bordas estiverem levemente duras e o centro ainda um pouco maleável, deixe esfriar para que terminem de assar.', 1),
(2, 'Derreter o chocolate com a manteiga e deixar esfriar um pouco. Bater os ovos e o açucar até ficar levemente esbranquiçado. Juntar o chocolate aos ovos, misturando aos poucos. Depois peneirar o cacau, o sal e a farinha, e misturar levemente até ficar tudo incorporado. Levar para assar em forno pre aquecido a 180º por 30-45 min em forma untada e polvilhada com cacau.', 2),
(3, 'Derreter o chocolate amargo com a manteiga em banho-maria, depois deixe amornar. Bater os ovos com o açúcar mascavo levemente. Incorpore o chocolate e manteiga derretidos aos ovos. Intercale adições da farinha com o café, misturando para que tudo fique homogêneo. Por fim, adicione o sal e o bicarbonato e misture levemente. Asse em forno pré-aquecido a 180º por, aproximadamente, 50 minutos.', 3),
(4, 'Aqueça a água até que ela esteja morna. Misture a água morna, o fermento, o leite em pó e o açúcar; adicione a farinha e o sal. Misture até que tudo fique integrado e comece a sovar. Sove por 3 minutos e depois acrescente a manteiga. Pode ser difícil de incorporar no começo mas continue sovando por 10 minutos até que a massa esteja forte e elástica. Deixe descansar por 10 minutos. Formate levemente em um rolo e deixe crescer em uma forma de pão, ou bolo inglês, por 1h30-2h. Pincele ovo batido no topo da massa e leve para assar em forno pré-aquecido a 180º por 30 a 35 minutos.', 4),
(5, 'Bater os ovos, com o açúcar, o óleo e o suco de laranja até que esteja tudo homogêneo. Incorporar a farinha, o fubá, o sal e o fermento. Misturar até que tudo esteja liso. Assar em forno pré-aquecido a 180º por 40 a 50 minutos.', 5),
(6, 'Ferver a água, o açúcar e a baunilha. Verter nas gemas enquanto bate com um batedor de arame. Bata até que fique firme e esbranquiçado, uns 5 minutos. Bater em outro pote o mascarpone e o creme de leite fresco até estarem bem misturados. Acrescente ao creme de gemas. O café deve ser bem passado bem forte. Submergir as bolachas por um segundo no café. Montar intercalando bolachas e o creme. Finalizar com cacau em pó peneirado por cima. Levar para gelar por, pelo menos 2 horas.', 6),
(7, 'Picar a cebola, a cenoura, os dentes de alho e os tomates. Selar a carne em gordura de bacon ou azeite. Refogar a cebola e a cenoura, depois o alho e então os tomates. Voltar a carne e colocar os tomates pelados e a cerveja, e então o caldo e água até submergir a carne. Cozinhar na panela de pressão em fogo baixo por 50 minutos, após pegar pressão. Tirar a carne e desfiar. Adicionar o arroz e ficar mexendo até cozinhar, se preciso colocar mais água fervendo. Voltar a carne e finalizar com um pouco de parmesão ralado, se tiver.', 8),
(8, 'Fritar a linguiça numa frigideira fria com azeite até ficar bem dourada. Adicionar o alho e refogar por dois minutos, temperar com pimenta. Adicionar a cerveja e deixar cozinhar tampada até reduzir até quase sumir. Juntar o creme de leite e deixar ferver uns minutos. Juntar o macarrão al dente e finalizar o cozimento no molho, e no fim, adicionar parmesão ralado.', 9),
(9, 'Refogar a cebola picada, a folha de louro e uma pitada de sal em azeite. Colocar um pouco de páprica picante. Adicione a cenoura ralada, o alho e então a pasta de tomate e os tomates. Cortar o frango em cubos e secar o excesso de água com papel toalha. Adicionar à panela e deixar refogar. Flambar com uisque, se quiser. Temperar com sal e colocar os tomates pelados e água ate cobrir. Deixar cozinhar com tampa até a água evaporar. Adicionar o creme de leite, a mostarda e o molho inglês. Deixar cozinhando em panela aberta até reduzir e encorpar. Ajustar sal e outros temperos.', 10),
(10, 'Esquentar a água e o leite até que estejam mornos. Misturar água, leite, fermento, açúcar, ovos, gemas e farinha e sovar até que fique incorporado. Adicionar a manteiga e sovar por 10 minutos. Deixar descansar por 2h30. Misturar o restante da manteiga, o açúcar e a canela e bater até que fique esbranquiçado. Após as 2h30, abrir a massa em um retângulo e espalhar o creme de manteiga e açúcar. Enrolar e cortar em pedaços. Deixe crescer novamente por 45 minutos. Asse em forno pré-aquecido a 180º por 45 minutos em uma forma untada com manteiga.', 11),
(11, 'Derreta o chocolate e a manteiga em banho-maria. Em outra tigela, bate os ovos e o açúcar até que fique esbranquiçado. Bata as claras em neve em outro pote. Misture o chocolate derretido e morno ao creme de gemas, em seguida incorpore delicadamente as claras em neve. Leve para gelar por, pelo menos, duas horas.', 14),
(12, 'Levar a manteiga para derreter e cozinhar até que a manteiga doure (manteiga noisette), deixe esfriar. Misture as claras com o açúcar de confeiteiro e as farinhas. Adicione a manteiga morna aos poucos. Cubra com um papel filme em contato e deixe descansar na geladeira por 24 horas. Asse em forno pré-aquecido a 180º por 30 minutos em forma untada com manteiga e enfarinhada.', 15),
(13, 'Bater a manteiga amolecida com o açúcar. Acrescentar a gema e a baunilha. Misturar a farinha. Dividir em porções de 25 gramas e pressionar cada porção com o dedão para fazer uma pequena cavidade. Colocar uma colher de chá de sua escolha de geléia no buraco. Assar em forno pré-aquecido a 180º por 25 minutos.', 16),
(14, 'Selar a carne em azeite. Refogar a cebola picada, a cenoura, o louro e o tomilho com uma pitada de sal. Adicionar o alho poró e o alho picado e refogar por mais alguns minutos. Acrescentar a farinha, a páprica e o extrato de tomate. Adicionar o caldo e o vinho. Voltar a carne para a panela e deixar cozinhar em fogo baixo por 3 horas em panela normal, ou por 45 minutos na panela de pressão.', 23),
(15, 'Bater todos os ingredientes menos o açúcar no liquidificador e deixar descansar. Derreter o açúcar na forma de pudim para fazer um caramelo. Deixar esfriar também. Asse em banho-maria em forno pré-aquecido a 180º por 1h30-2h coberto com papel alumínio.', 21);
INSERT INTO quantidades (idQuantidade, fkIngrediente, fkReceita, quantidade) VALUES
(1, 1, 1, '110 gramas'),
(2, 3, 1, '90 gramas'),
(3, 4, 1, '90 gramas'),
(5, 5, 1, '1/2 colher de chá'),
(6, 6, 1, '1/2 colher de chá'),
(7, 7, 1, '170 gramas'),
(8, 8, 1, '15 gramas'),
(9, 9, 1, '40 gramas'),
(10, 26, 1, '160 gramas'),
(11, 28, 1, '1'),
(12, 13, 2, '170 gramas'),
(13, 1, 2, '114 gramas'),
(14, 3, 2, '1 1/2 xícara'),
(15, 2, 2, '3'),
(16, 14, 2, '1/4 xícara'),
(17, 7, 2, '1/2 xícara + 2 colheres de sopa'),
(18, 5, 2, 'Uma pitada'),
(19, 1, 3, '150 gramas'),
(20, 4, 3, '200 gramas'),
(21, 7, 3, '130 gramas'),
(22, 5, 3, '1/4 colher de chá'),
(23, 6, 3, '1/2 colher de chá'),
(24, 2, 3, '2'),
(25, 13, 3, '85 gramas'),
(26, 19, 3, '170 gramas'),
(27, 7, 4, '300 gramas'),
(28, 29, 4, '180 gramas'),
(29, 3, 4, '25 gramas'),
(30, 9, 4, '20 gramas'),
(31, 1, 4, '10 gramas'),
(32, 5, 4, '6 gramas'),
(33, 25, 4, '6 gramas'),
(34, 2, 5, '2'),
(35, 10, 5, '2/3 xícara'),
(36, 30, 5, '2/3 xícara'),
(37, 3, 5, '1 1/6 xícara'),
(38, 12, 5, '2/3 xícara'),
(39, 7, 5, '1 1/3 xícara'),
(40, 5, 5, 'Uma pitada'),
(41, 17, 5, '1 1/2 colher de chá'),
(42, 3, 6, '32 gramas'),
(43, 21, 6, '2'),
(44, 8, 6, '1 colher de chá'),
(45, 29, 6, '32 gramas'),
(46, 5, 6, 'Uma pitada'),
(47, 23, 6, '160 gramas'),
(48, 20, 6, '240 gramas'),
(49, 24, 6, '133 gramas'),
(50, 19, 6, '160 gramas'),
(51, 31, 8, '500 gramas'),
(52, 32, 8, 'Uma grande'),
(53, 33, 8, 'Uma pequena'),
(54, 34, 8, '5 dentes'),
(55, 35, 8, 'Dois'),
(56, 36, 8, 'Uma'),
(57, 37, 8, '1 xícara'),
(58, 38, 8, '1 1/2 copos'),
(59, 46, 8, 'Uma lata'),
(60, 40, 9, '200 gramas'),
(61, 34, 9, '3 dentes'),
(62, 37, 9, 'Uma lata'),
(63, 20, 9, '250 gramas'),
(64, 39, 9, '150 gramas'),
(65, 47, 9, '50 gramas'),
(66, 45, 10, '500 gramas'),
(67, 32, 10, 'Uma grande'),
(68, 33, 10, 'Uma pequena'),
(69, 34, 10, '3 dentes'),
(70, 35, 10, 'Dois'),
(71, 46, 10, 'Uma lata'),
(72, 44, 10, 'Uma'),
(73, 41, 10, 'Uma colher de sopa'),
(74, 42, 10, 'Uma colher de sopa'),
(75, 43, 10, 'Uma colher de sopa'),
(76, 20, 10, '250 gramas'),
(77, 7, 11, '350 gramas'),
(78, 11, 11, '110 gramas'),
(79, 1, 11, '60 gramas'),
(80, 28, 11, '1'),
(81, 21, 11, '2'),
(82, 3, 11, '45 gramas'),
(83, 29, 11, '30 gramas'),
(84, 5, 11, '5 gramas'),
(85, 25, 11, '5 gramas'),
(86, 1, 11, '50 gramas'),
(87, 3, 11, '80 gramas'),
(88, 48, 11, '3 gramas'),
(89, 1, 12, '57 gramas'),
(90, 3, 12, '1/2 xícara'),
(91, 2, 12, '1'),
(92, 8, 12, '1 colher de chá'),
(93, 49, 12, '2 grandes'),
(94, 7, 12, '3/4 + 1/8 xícara'),
(95, 17, 12, '1/2 colher de chá'),
(96, 6, 12, '1/2 colher de chá'),
(97, 48, 12, '1/4 colher de chá'),
(98, 5, 12, '1/8 colher de chá'),
(99, 50, 12, 'A gosto'),
(100, 51, 12, 'A gosto'),
(101, 11, 12, '1 colher de sopa'),
(102, 13, 14, '400 gramas'),
(103, 1, 14, '80 gramas'),
(104, 21, 14, '8'),
(105, 22, 14, '12'),
(106, 3, 14, '130 gramas'),
(107, 54, 14, '1 colher de chá'),
(108, 1, 15, '100 gramas'),
(109, 22, 15, '100 gramas'),
(110, 56, 15, '110 gramas'),
(111, 55, 15, '55 gramas'),
(112, 7, 15, '35 gramas'),
(113, 1, 16, '85 gramas'),
(114, 3, 16, '1/4 xícara'),
(115, 7, 16, '3/4 + 1/8 xícara'),
(116, 17, 16, '1/4 colher de chá'),
(117, 5, 16, 'Uma pitada'),
(118, 21, 16, '1'),
(119, 8, 16, '1/2 colher de chá'),
(120, 64, 23, '1 quilo'),
(121, 32, 23, '2 médias'),
(122, 33, 23, 'Uma média'),
(123, 34, 23, '5 dentes'),
(124, 44, 23, '2 folhas'),
(125, 62, 23, 'Alguns ramos'),
(126, 7, 23, 'Uma colher de sopa'),
(127, 41, 23, 'Uma colher de sopa'),
(128, 63, 23, '300 gramas'),
(129, 37, 23, '500 gramas'),
(130, 65, 23, 'Um talo médio'),
(131, 66, 23, 'Uma colher de chá'),
(132, 57, 21, 'Duas latas'),
(133, 11, 21, 'A mesma medida da lata'),
(134, 2, 21, '2'),
(135, 21, 21, '2');


var data = (function(){

    var data, area, authors, title, papers,
 
    init = function(){
		papers = [];
        data = {};
        area = {};
        authors = {};
        title = [];
        _read();
        return this;
    },

    _read = function(){
        var  i, j, current, authorArr, author;

        for (i = 0; i < _data.length; i++){
            current = _data[i];
			_addMap(data, current.title, current);
			if(current.type === "PAPER"){
				papers.push(current.title);
			} 
			title.push(current.title);
			_addMap(area, current.area, current.title);
			authorArr = current.authors.split(";");
			for (j = 0; j < authorArr.length; j++){
				author = authorArr[j].trim();
				_addMap(authors, author, current.title);
			}
			}
		
    },

    getByArea = function(){
        return area;
    },

    getByAuthor = function(){
        return authors;
    },

    getByTitle = function(){
        return title;
    },

    getPaper = function(title){
        return data[title][0] || {};
	},
	
	getByPaper = function(){
		return papers;
	},

    _addMap = function(map, key, value){
        if(!map[key]) map[key] = [];
        if(map[key].indexOf(value) === -1) map[key].push(value);
    },


    _data = [
		{
			"code": "BVDV",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Radiolabeling of protein-based nanoparticles for biomedical imaging and diagnostics",
			"authors": "Aryel Heitor Ferreira;Fabio L. N. Marques;Larissa Estessi de Souza;Gustavo H. C. Varca;Gabriela Nemesio Fazolin;Tamara Fucase;Ademar Benévolo Lugão",
			"link": "https://drive.google.com/file/d/1D_fzJj0LuZm8JknDdIIVfEGRqKIVg8PA/view"
		},
		{
			"code": "BVEG2",
			"area": "Nanoinformatics and Modeling",
			"type": "PAPER",
			"title": "Paper - Innovation trajectories: an IPEN´s nanotechnology competence roadmapping to match´s market mechanisms",
			"authors": "Aline A. Perini;Anderson Zanardi Freitas",
			"link": "https://drive.google.com/file/d/1sbzeTudECxXXA7vQzTbbm2chWT-aikeM/view"
		},
		{
			"code": "BVAA",
			"area": "Biological-nano Interactions",
			"type": "PAPER",
			"title": "Paper - Gold Nanoparticles synthetized with Aminolevulinic Acid for Theranostic: Photodynamic and Sonodynamic Therapies",
			"authors": "Karina de Oliveira Gonçalves;Letícia Bonfim;Daniel Perez Vieira;Lilia Coronato Courrol",
			"link": "https://drive.google.com/file/d/1vkIVwR4Bgs9ix0-cIvokCHHUs5Mz7Miw/view"
		},
		{
			"code": "BVDN",
			"area": "Chemical-nano interactions",
			"type": "PAPER",
			"title": "Paper - Characterization and Photocatalytic Behavior of TiO2 Thin Films Grown by MOCVD Process",
			"authors": "Rodrigo Teixeira Bento;Eduardo Cesar de Oliveira;Margarida Szurkalo;Olandir V. Correa;Marina Fuser Pillis",
			"link": "https://drive.google.com/file/d/1F15HlNXc7BZYWDOrp_0oqmigml7GxkOm/view"
		},
		{
			"code": "BVDP",
			"area": "Chemical-nano interactions",
			"type": "PAPER",
			"title": "Paper - Synthesis and Characterization of TiO 2 Films Obtained by Sol-Gel Method",
			"authors": "Margarida Szurkalo;Eduardo C. de Oliveira;Olandir V. Correa;Rodrigo T. Bento;Marina Fuser Pillis",
			"link": "https://drive.google.com/file/d/1MeemT5cqpsTbxAci_J9giu-lb1t2u6FQ/view"
		},
		{
			"code": "BTPN",
			"area": "Chemical-nano interactions",
			"type": "PAPER",
			"title": "Paper - Hybrid density-functional calculations of formic acid on anatase TiO​2​ (101) surfaces",
			"authors": "Liangzhi Kou​;Andreia Luisa da Rosa​;Erika Nascimento Lima​;Thomas Frauenheim",
			"link": "https://drive.google.com/file/d/1EqGf_l_YXSsE3clLi2wN1mIWwOY3qvGx/view"
		},
		{
			"code": "BTP4",
			"area": "Nanomanufacturing",
			"type": "PAPER",
			"title": "Paper - Hardwired for success: Ni supported CeO 2 :Sm 2 O 3 nanowires as a super stable catalyst for ethanol steam reforming",
			"authors": "Thenner Silva Rodrigues;Arthur Brucoli Leme de Moura;Felipe A. e Silva;Eduardo G. Candido;Vanderlei Sérgio Bergamaschi;João Coutinho Ferreira;Marcelo Linardi;Fabio Coral Fonseca",
			"link": "https://drive.google.com/file/d/1O0mkeJaAyv2J99kWf2aytmW6ZBXb3tRz/view"
		},
		{
			"code": "BTW4",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Reduced graphene oxide nanocomposite hydrogels improve functional recovery after peripheral nerve injury",
			"authors": "Monique Culturato Padilha Mendonça;Luciana Politti Cartarozzi;Matheus Perez;Tiago Branco Becher;Catia Ornelas;Alexandre Leite Rodrigues de Oliveira;Marcelo Bispo de Jesus",
			"template": 0,
			"link": "https://drive.google.com/file/d/1_uqQb1BkV-RB8Ik_ieoQKijIfr8ZzRge/view?usp=drivesdk"
		},
		{
			"code": "BTAX",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Physico-chemical characterization of voriconazole-mucoadhesive organogels for intravaginal delivery",
			"authors": "Samyr Machado Querobino;Fanny Nascimento Costa;Daniele Ribeiro de Araujo;Carlos Alberto-Silva",
			"template": 0,
			"link": "https://drive.google.com/file/d/1_MzxGHC8NvEsxcc9FJJzDOy7azBDfBNV/view?usp=drivesdk"
		},
		{
			"code": "BSXB",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Toward extreme anti-icing surfaces",
			"authors": "Hadi Ghasemi",
			"template": 0,
			"link": "https://drive.google.com/file/d/1_HVFoTQNqgDiGiUitVF77lVEpHVc-0Wy/view?usp=drivesdk"
		},
		{
			"code": "BVDM",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Use of nanocarriers as maximizers of the antineoplastic cytotoxic effect of 13-cis-retinoic acid",
			"authors": "Daiane Guedes Domingues;Antoninho Teixeira Júnior;Alexandre Ehrhardt",
			"template": 0,
			"link": "https://drive.google.com/file/d/1_9mJfago3Aaz-NiVsQfrPdn594ZR3xRN/view?usp=drivesdk"
		},
		{
			"code": "BSBD",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Dual-Mode Investigation of Multifunctional Iron-oxide@NaGdF4:xCe3+,xTb3+,yDy3+ oval Nanoparticles",
			"authors": "Navadeep Shrivastava;Uéslen Rocha Silva;Diego Muraca;Carlos Jacinto da Silva;Hermi Felinto Brito;Alan Silva de Menezes;Surender Kumar Sharma",
			"template": 0,
			"link": "https://drive.google.com/file/d/1zzHAVve1FVjYHHWgAB2FIy0rI9IqAMzN/view?usp=drivesdk"
		},
		{
			"code": "BRTQ",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Surface Chemistry and Trap States of Germanium Quantum Dot Thin films",
			"authors": "Heather Renee Sully;Riley Rutan;Kaitlin Hellier;Kathryn Ann Newton;Frank G Bridges;Susan Kauzlarich;Sue Carter",
			"template": 0,
			"link": "https://drive.google.com/file/d/1zYXuuL0U_4haVkX8ZQxoo6t4XUIaa43B/view?usp=drivesdk"
		},
		{
			"code": "BSRE",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Characterization of Advanced Materials by means of Aberration Corrected Transmission Electron Microscopy ",
			"authors": "Francisco Carlos Robles Hernandez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ZYvWg-CgzP1nEuELJ6LIhgFWx3l-AgFg/view?usp=drivesdk"
		},
		{
			"code": "BTDA",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Development, characterization and toxicological evaluation of Rivaroxaban PLGA-nanoparticles for thrombosis treatment",
			"authors": "Monique Etnea Machado;Maria Clara Macêdo Pinheiro;Flávia Almada do Carmo;Marcela Cristina de Moraes;Luiz Claudio Rodrigues Pereira da Silva;Lucio Mendes Cabral;Plínio Cunha Sathler",
			"template": 0,
			"link": "https://drive.google.com/file/d/1YtQ13OgyBWAkrntg4zfm29bjViCTCyPt/view?usp=drivesdk"
		},
		{
			"code": "BS2R",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Influence of Li+ modification on Tm3+-TiO2 photocatalytic activity  under visible light irradiation",
			"authors": "Joanna Nadolna;Pawel Mazierski;Adriana Zaleska-Medynska",
			"template": 0,
			"link": "https://drive.google.com/file/d/1YKiaA1Mn1_YPNBadClqJaG913OgJKc6v/view?usp=drivesdk"
		},
		{
			"code": "BRTT",
			"area": "Education",
			"type": "ORAL",
			"title": "Industrial revolution or opportunities lost: are we missing out on nano (and high-tech) entrepreneurship?",
			"authors": "Matthew Hull",
			"template": 0,
			"link": "https://drive.google.com/file/d/1YhLWRaJGbqB5_3qu0yKPJ1xDgJjpzY3B/view?usp=drivesdk"
		},
		{
			"code": "BTBF",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Performance of sulfidated nano zerovalent iron nanoparticles for the remediation of arsenic contaminated sites",
			"authors": "Mariana Umpierrez;Subhasis Ghoshal",
			"template": 0,
			"link": "https://drive.google.com/file/d/1YEFMDKwhF_YBdfwuB_3vfqZgORjT2CCl/view?usp=drivesdk"
		},
		{
			"code": "BVF4",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "In vitro safety evaluation of multi-walled carbon nanotubes functionalized with polyethylene glycol in V79-4 cell line",
			"authors": "Graziela de Paula Ferreira Dantas;Lívia Santos Gomides;Estefânia Mara do Nascimento Martins;Júlia Barros Gomes;Clascídia A. Furtado;Adelina Pinheiro Santos;Carlos Alberto Tagliati",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Y55sohJ7eVUnTDmSF6GpJSv9aTo_HP17/view?usp=drivesdk"
		},
		{
			"code": "BS2K",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Toxicity Of Binary Mixture Of AgNPs And TiO2NPs, Nanoparticles Alone And Silver-Doped TiO2NPs",
			"authors": "Marcin Kruszewski;Sylwia Meczynska-wielgosz;Maria Wojewodzka;Anna Kedziora;Lucyna Kapka-skrzypczak",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Y2oUbgnDAvDpOv6KETuN_roKb6LwYgpn/view?usp=drivesdk"
		},
		{
			"code": "BSAK",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Polymeric nanoparticles for drug delivery: bio-distribution after intravenous injection",
			"authors": "Izabella Ferreira Campos;Melissa Florence Marques;Claudia Pinto Figueiredo;Helen Conceição Ferraz;José Carlos Pinto",
			"template": 0,
			"link": "https://drive.google.com/file/d/1y-AdJZltK_pnGd2y2r0vxsMzipiu_cBP/view?usp=drivesdk"
		},
		{
			"code": "BTBX",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Characterization of surface plasmons in noble metal thin film by SNOM",
			"authors": "Antonio Domingues dos Santos;Fabio Lombardi Maximino",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Xz5vN4TlcEuJzfFjE6jiSYeDM_HlKNR9/view?usp=drivesdk"
		},
		{
			"code": "BTRB",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Interaction of ZnO nanoparticles and Common beans (Phaseolus vulgaris) - a synchrotron study",
			"authors": "Susilaine Maira Savassa;Nadia M. Duran;Eduardo Santos Rodrigues;Eduardo de Almeida;Hiram Michel-Castillo;Hudson W. P. de Carvalho",
			"template": 0,
			"link": "https://drive.google.com/file/d/1XQT7kXQrSYlKMENt0mFkQDo80winmgqA/view?usp=drivesdk"
		},
		{
			"code": "BTER",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Conductive carbons from cellulose and lignin and its use in flexible paper-based devices",
			"authors": "Mathias Strauss;Ana Claudia Fingolo;Manoella da Silva Cavalcante;Mariane Peres Pereira;Carlos César Bof Bufon;Murilo Santhiago",
			"template": 0,
			"link": "https://drive.google.com/file/d/1xnJUv6XaRrYJzs_gmLSZgxLMMcMEEqb0/view?usp=drivesdk"
		},
		{
			"code": "BSQW",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "On the microtubule-gold nanoparticle interaction",
			"authors": "Daniel Oliveira;Jorge da Silva Shinohara;Henrique Eisi Toma",
			"template": 0,
			"link": "https://drive.google.com/file/d/1xanI7dOf0BMCU65ynYg70GdZ23jzCnWO/view?usp=drivesdk"
		},
		{
			"code": "BSPM",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Tissue elastography using “nanobombs”",
			"authors": "Kirill Larin",
			"template": 0,
			"link": "https://drive.google.com/file/d/1x01nY7nsCbO2LJ1RnUBuRp56lg28i4N0/view?usp=drivesdk"
		},
		{
			"code": "BRXG",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Nano-augmented Microwave Irradiation of Soils Containing Heavy and Long-Chain Petroleum-Hydrocarbons: A Rotating Reactor Pilot Design",
			"authors": "Emmy Lea Pruitt;Onur G Apul;Roopa Kamath;Kitty Kong;Paul Dahlen;Paul Westerhoff",
			"template": 0,
			"link": "https://drive.google.com/file/d/1X-Mu6teAUel_XQIB0V6xK4zZ8DMZMBNK/view?usp=drivesdk"
		},
		{
			"code": "BSAM",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Internalization and cytotoxicity of TAT peptide functionalized rivastigmine nanoparticles in stem cells",
			"authors": "Izabella Ferreira Campos;Lys Hamond R Mangia;Rosalia Mendez Otero;Helen Conceição Ferraz;José Carlos Pinto",
			"template": 0,
			"link": "https://drive.google.com/file/d/1wzOU508Sz_OZIqKxXjr47Es_Py7TrVbU/view?usp=drivesdk"
		},
		{
			"code": "BTCP",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Studying the toxicity of copper nanoparticles to Danio rerio embryos",
			"authors": "Gabriela Helena da Silva;Romana Petry;Aline Maria Zigiotto de Medeiros;Latif U. Khan;Regina Teresa Rosim Monteiro;Diego Stefani Teodoro Martinez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1wzjF7IuRmr7Kp2yuwezFLVhnpt0wuzih/view?usp=drivesdk"
		},
		{
			"code": "BSB4",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "3D nanoscale imaging of photocatalytic-inactivated S. aureus using transmission X-ray microscopy",
			"authors": "Yao-Tung Lin",
			"template": 0,
			"link": "https://drive.google.com/file/d/1WPh0fH5FzUvy_JKRVUNiu4F5fwN1nlpG/view?usp=drivesdk"
		},
		{
			"code": "BTBC",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Ultradonut topology of the nuclear envelope",
			"authors": "Mehdi Torbati;Tanmay P. Lele;Ashutosh Agrawal",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Wmbga9EBOvyXnQHPK9NTFopv4h2xel7y/view?usp=drivesdk"
		},
		{
			"code": "BS6W",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Developing Versatility in a Peltier Thermoelectric Device",
			"authors": "Peter Zhao;Michael Scimeca;Ayaskanta Sahu",
			"template": 0,
			"link": "https://drive.google.com/file/d/1wlZC0z0jI883pimOLB8vZS5BBYiv2YoU/view?usp=drivesdk"
		},
		{
			"code": "BRTC",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Role of surface valence states in nanoceria in modulating ROS and its role in nanomedicine",
			"authors": "Sudipta Seal",
			"template": 0,
			"link": "https://drive.google.com/file/d/1WjAUjqHfjLfCiU_O7q-IE6lsyAkjBaKY/view?usp=drivesdk"
		},
		{
			"code": "BTAR",
			"area": "Sustainability",
			"type": "POSTER",
			"title": "Natural rubber base nanocomposites structured with mixture of organophilic clays and rice husk ash.",
			"authors": "Fábio Jose Esper;Guillermo Ruperto Martín-Cortés;Adriana Almeida Cutrim;Wildor Theodoro Hennies;Francisco Rolando Valenzuela Diaz",
			"template": 0,
			"link": "https://drive.google.com/file/d/1WIVN0wr1J1slQoyDtSXYoNAxlXc0Fwxa/view?usp=drivesdk"
		},
		{
			"code": "BPJX",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "The interaction of bacterial cells with model graphene oxide surfaces: insights from single-cell force spectroscopy",
			"authors": "Santiago Romero-Vargas Castrillón",
			"template": 0,
			"link": "https://drive.google.com/file/d/1wF4Izr96U8x8TP8Y3g5RJJxVXU62RkV4/view?usp=drivesdk"
		},
		{
			"code": "BTJX",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Nanomembrane-based transport junctions for integrated molecular electronics",
			"authors": "Leandro Merces;Rafael Furlan de Oliveira;Davi Henrique Starnini de Camargo;Carlos César Bof Bufon",
			"template": 0,
			"link": "https://drive.google.com/file/d/1wbwU1O11MlJUcrqud6Dwyr6GfOSHGKsf/view?usp=drivesdk"
		},
		{
			"code": "BRTM",
			"area": "Nanoinformatics and Modeling",
			"type": "ORAL",
			"title": "3D Syringe Nanorobotic Simulator for Zika Virus Biomolecules Detection",
			"authors": "Lourdes Mattos Brasil;Glécia Virgolino da Silva Luz;Patrycia Barros de Lima Klavdianos;Fábio Vladimir Calixto de Araújo;Roxana Cláudia Iquize Condori;Kleber Vanio Gomes Barros",
			"template": 0,
			"link": "https://drive.google.com/file/d/1wA2xUy3xoUhxFLtT9GPBtosLRNAh31uc/view?usp=drivesdk"
		},
		{
			"code": "BTMC",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Interaction of single and multilayer graphene oxide with fetal bovine serum: impacts on cytotoxicity assessment",
			"authors": "Lidiane Silva Franqui;Antônio Carlos Borges;Marcelo Alexandre de Farias;Rodrigo Villares Portugal;Carlos Alberto Costa;Vitor Rafael Coluci;Adriana Franco Paes Leme;Diego Stefani Teodoro Martinez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1w2YhyVGBhZf5tpgftP3bBZ5moldS6NhF/view?usp=drivesdk"
		},
		{
			"code": "BTAT",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Gold Nanoparticles Synthetized with Aminolevulinic Acid for Theranostic: Photodynamic and Sonodynamic Therapies",
			"authors": "Karina de Oliveira Gonçalves;Letícia Bonfim;Daniel Perez Vieira;Lilia Coronato Courrol",
			"template": 0,
			"link": "https://drive.google.com/file/d/1W-ZY87IClQJvH-k6i5m-NZ1vL8A_tw44/view?usp=drivesdk"
		},
		{
			"code": "BS4A",
			"area": "Education",
			"type": "ORAL",
			"title": "An Undergraduate Laboratory Course to Study Nanomaterials from Synthesis through Environmental Impacts",
			"authors": "Mary Jo Kirisits;Navid B Saleh;Michael E Gorman",
			"template": 0,
			"link": "https://drive.google.com/file/d/1vtpR2VwRsExFjqM9GhwT4Ecd38d81MhW/view?usp=drivesdk"
		},
		{
			"code": "BTNT",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Metallic and bimetallic iron oxide nanoparticles for potential biomedical vehicles",
			"authors": "Tatiane Nassar Britos;Paula Silvia Haddad Ferreira",
			"template": 0,
			"link": "https://drive.google.com/file/d/1vO2Hi_k5LRCaTR22fgL6Gefd2duEntxC/view?usp=drivesdk"
		},
		{
			"code": "BTBR",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Co-Crystallization of Proteins and Nanocrystals: A Route Towards Nanomaterial Organization",
			"authors": "Vicki Leigh Colvin",
			"template": 0,
			"link": "https://drive.google.com/file/d/1VNRTRYm_RppnzyxGUs7VChj8nUflHziG/view?usp=drivesdk"
		},
		{
			"code": "BTJD",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Use of Nanoparticles of gamma-alumina for drug delivery system",
			"authors": "Antônio Hortêncio Munhoz Jr.;Mariana Oliva de Oliveira;Maura Vincenza Rossi;Leila Figueiredo de Miranda;Juliana Alves Luiz Pereira",
			"template": 0,
			"link": "https://drive.google.com/file/d/1vlSNSOIyecNeX-QK3f2xDsx4uJnDVPYr/view?usp=drivesdk"
		},
		{
			"code": "BTCM",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Immobilization of graphene oxide in a poly(divinylbenzene) matrix for the treatment of liquid radioactive waste containing 137Cs",
			"authors": "Fernando Mendes de Oliveira;Ademar J. Potiens Jr;José Luiz Fejfar;Debora Frigi Rodrigues;Daniel Rossado Oliveira;Patricia Busko di Vitta;Solange Kazumi Sakata",
			"template": 0,
			"link": "https://drive.google.com/file/d/1VffKK6Q8Y57S9dj_l3iFd5iUV4Mkmyl9/view?usp=drivesdk"
		},
		{
			"code": "BS62",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Review of brachytherapy technique in nanoscale",
			"authors": "Beatriz Ribeiro Nogueira;Maria Elisa Chuery Martins Rostelato;Carlos Alberto Zeituni;Cintia Alexandra Tozetti;Andreza A. D. C. C. Gonzalez;José Ronaldo Oliveira Marques;Carla Daruich Souza",
			"template": 0,
			"link": "https://drive.google.com/file/d/1v4ZqWol6T8QM-5PtmmPJH7eCEkLem3g8/view?usp=drivesdk"
		},
		{
			"code": "BTKH",
			"area": "Ecological-nano interactions",
			"type": "POSTER",
			"title": "Adsorption isotherms for the removal of Am-241 in radioactive liquid wastes using magnetite nanoparticles",
			"authors": "Mauricio Tiokazu Oshiro;Solange Kazumi Sakata;Ademar J. Potiens Jr",
			"template": 0,
			"link": "https://drive.google.com/file/d/1uvIua3zSDdKF9fCCUiVeL8rwWZB8o0R9/view?usp=drivesdk"
		},
		{
			"code": "BS2N",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Modified Ta2O5 nanotubes for photocatalytic application",
			"authors": "Marek Piotr Kobylanski;Mateusz Adam Baluk;Pawel Mazierski;Adriana Zaleska-Medynska",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Up_0E6QWgtb6fQ1WNfr2z6lyyf8EtuKd/view?usp=drivesdk"
		},
		{
			"code": "BVGE",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Converging nanobiotechnologies and impact on biomedical applications",
			"authors": "Luiz Ricardo Goulart",
			"template": 0,
			"link": "https://drive.google.com/file/d/1uldCNWG_rKMLeUxnA43-y0mCDWamIQiL/view?usp=drivesdk"
		},
		{
			"code": "BS4V",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "The Use of Fluorescence Lifetime Imaging Microscopy on Engineered Nanomaterial Induced Changes in Lipid Membranes",
			"authors": "Matthew Sydor;Donald S. Anderson;Harmen B. Steele;J.b. Alexander Ross;Andrij Holian",
			"template": 0,
			"link": "https://drive.google.com/file/d/1uJYxJCcFp8aJWgOBphV90GhHNA_45ylA/view?usp=drivesdk"
		},
		{
			"code": "BV2Q",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Nanostructured lipid carriers with antitumor action: potential application to cancer treatment",
			"authors": "Ludmilla David de Moura;Lígia Nunes de Moraes Ribeiro;Gustavo Henrique Rodrigues da Silva;Eneida de Paula",
			"template": 0,
			"link": "https://drive.google.com/file/d/1uCK4VbA_FNEON7iVUqEdp3yNZ2yjN9pT/view?usp=drivesdk"
		},
		{
			"code": "BSBB",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Nanotechnology for Enhancing Microbial-bio-electrochemical processes for Waste-to-Electricity Generation during Long-term Space Exploration   ",
			"authors": "Venkataramana Gadhamshetty;Namita Shrestha;Shailabh Rauniyar;Abhilash Kumar Tripathi;Rajesh Sani;Zhengrong Gu;James D Hoefelmeyer;Anuradha R Shende;Rajesh V Shende",
			"template": 0,
			"link": "https://drive.google.com/file/d/1UbG6VliBz0fnDRso9grhCpprd6FAeguu/view?usp=drivesdk"
		},
		{
			"code": "BS2D",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Morphology-dependent photocatalytic hydrogen generation of GdVO4 nanostructures prepared by hydrothermal reaction",
			"authors": "Pawel Mazierski;Joanna Nadolna;Adriana Zaleska-Medynska",
			"template": 0,
			"link": "https://drive.google.com/file/d/1UA2KuCp_IbvgwX6CIjJZu2SUg6NieU3R/view?usp=drivesdk"
		},
		{
			"code": "BTME",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "The impact of physical-chemical parameters over the formation of papain nanoparticles crosslinked by radiation",
			"authors": "Gabriela Nemesio Fazolin;Gustavo H. C. Varca;Ademar Benévolo Lugão",
			"template": 0,
			"link": "https://drive.google.com/file/d/1u7Z7QLyydzAhLHzCnm97ImkAf4-Tt_po/view?usp=drivesdk"
		},
		{
			"code": "BTMF",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Ablation of melanomas with phthalocyanines-gold nanorods complexes for PTT and PDT: histologic and macroscopic results",
			"authors": "Lucas Freitas de Freitas;Anderson Orzari Ribeiro;Michael Hamblin;Ana Maria de Guzzi Plepis",
			"template": 0,
			"link": "https://drive.google.com/file/d/1U2zAwF4MM2GHghNOBGUJMAcxzpKCRfnm/view?usp=drivesdk"
		},
		{
			"code": "BTVP",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Molecular mechanisms of intracellular release of doxorubicin carreated in pH-sensitive and non-sensitive liposomes",
			"authors": "Samara Bonesso dos Reis;Juliana de Oliveira Silva;André Luís Branco de Barros;Monique Culturato Padilha Mendonça;Marcelo Bispo de Jesus",
			"template": 0,
			"link": "https://drive.google.com/file/d/1tu3ItM2nrUbC1kfzf7o5eG6GO0upqpZQ/view?usp=drivesdk"
		},
		{
			"code": "BSAH",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Engineering photocatalytic cements for efficient water treatment: How formulation affects performance ",
			"authors": "Pamela Zuniga;Jaime Francisco Quesada;Pedro José Alvarez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1trtbiHYgZQzPirTN8CSZgM23WyiMAa5w/view?usp=drivesdk"
		},
		{
			"code": "BTT2",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "X-ray fluorescence uncovering the interaction of CuO nanoparticles on Phaseolus vulgaris seeds",
			"authors": "Hudson W. P. de Carvalho;Eduardo de Almeida;Nadia M. Duran",
			"template": 0,
			"link": "https://drive.google.com/file/d/1TNfy95B1ae2u3W68WwFEM37IEeccmqtC/view?usp=drivesdk"
		},
		{
			"code": "BTKC",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Antimicrobial activity of Graphene Oxide/Silver nanocomposite obtained by Electron Beam  ",
			"authors": "Raynara Maria Silva Jacovone;Jaqueline Jamara Souza Soares;Thainá Silva;Debora Frigi Rodrigues;Flavia Rodrigues de Oliveira Silva;Rafael H L Garcia;Solange Kazumi Sakata",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Thu-UYbnlUirriYTiscG2C6fWieEOvGp/view?usp=drivesdk"
		},
		{
			"code": "BS4H",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "Metabolomics as an early indicator of potential implications of engineered nanomaterials",
			"authors": "Arturo A Keller;Lijuan Zhao",
			"template": 0,
			"link": "https://drive.google.com/file/d/1TblfeWvcKgzrkVR9K0jlXTRW0ZXQQVjD/view?usp=drivesdk"
		},
		{
			"code": "BTPN",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Hybrid density-functional calculations of formic acid on anatase TiO2 (101) surfaces",
			"authors": "Andreia Luisa da Rosa;Liangzhi Kou;Erika Nascimento Lima;Thomas Frauenheim",
			"template": 0,
			"link": "https://drive.google.com/file/d/1S_1d57c7qKim7jG_uWIXyF1ijuqYIBDz/view?usp=drivesdk"
		},
		{
			"code": "BRZC",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Measurement of Surface Wettability of Engineered Nanoparticles using Atomic Force Microscope (AFM)",
			"authors": "Wanyi Fu;Wen Zhang",
			"template": 0,
			"link": "https://drive.google.com/file/d/1sy4NgSqNueVqEp_T13KX9v1grcrmAiry/view?usp=drivesdk"
		},
		{
			"code": "BRV4",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "Response of soybean plants to cadmium sulfide quantum dots as a function of surface coating",
			"authors": "Sanghamitra Majumdar;Jason White",
			"template": 0,
			"link": "https://drive.google.com/file/d/1st9_Pot3SRkNYFCySbhJRQgMtDBS46lx/view?usp=drivesdk"
		},
		{
			"code": "BSR4",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Enhanced thermoelectric properties of p-type Mg3Sb2 via co-doping of Na and Zn",
			"authors": "Shuo Chen;Zhensong Ren;Jing Shuai;Jun Mao;Qing Zhu;Shaowei Song",
			"template": 0,
			"link": "https://drive.google.com/file/d/1sbhkhQ2A8JRc9iG1h0jpbnmRrzmATRvO/view?usp=drivesdk"
		},
		{
			"code": "BVEW",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Synthesis of ZnO for biocide activity on SEBS/PP applications",
			"authors": "Luiz Gustavo Hiroki Komatsu;Washington Luiz Oliani;Vijaya K. Rangari;Duclerc Fernandes Parra;Ademar Benévolo Lugão",
			"template": 0,
			"link": "https://drive.google.com/file/d/1S62QvntYSsUPwrlwYMv0If7MjUko3gj_/view?usp=drivesdk"
		},
		{
			"code": "BRTJ",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Zero and One-Dimensional Structures Based in ZnO and Biomedical Engineering Applications",
			"authors": "Glécia Virgolino da Silva Luz;Lourdes Mattos Brasil;Fernanda Feitosa de Souza Oliveira;Wagner Moreira Pinheiro;Leandro Xavier Cardoso",
			"template": 0,
			"link": "https://drive.google.com/file/d/1RDWFgae6PvKe1G0AUJu2CV2trdgRX6SK/view?usp=drivesdk"
		},
		{
			"code": "BRP2",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Structure Activity Relationships of Engineered Nanomaterials at the Nano-bio Interface",
			"authors": "Tian Xia",
			"template": 0,
			"link": "https://drive.google.com/file/d/1RCQXINQfEIWGpjl1jNkekxNUyIoR4m-c/view?usp=drivesdk"
		},
		{
			"code": "BTAE",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Surface characterization of latex beads aged for one year and settled in glass bottles. ",
			"authors": "Anthony Maik Correia da Silva;Antony Ernesto Santos Silva;Phabyanno Rodrigues Lima;Jonas dos Santos Sousa;Alan John Duarte de Freitas;Johnnatan Duarte de Freitas;Anthony Maik Correia da Silva",
			"template": 0,
			"link": "https://drive.google.com/file/d/1qVl7BGLWgUjjj2e72TR_Ljfrp8M7C8f6/view?usp=drivesdk"
		},
		{
			"code": "BRXC",
			"area": "Ecological-nano interactions",
			"type": "POSTER",
			"title": "Characterizing the molecular mechanisms for the uptake of cerium oxide nanoparticles by soybean (Glycine max. (L.) Merr.)",
			"authors": "Hamidreza Sharifan;Xingmao Ma",
			"template": 0,
			"link": "https://drive.google.com/file/d/1QrtbnnASOFe8I63P0pSmBjJVLEeDkJ2Z/view?usp=drivesdk"
		},
		{
			"code": "BRYP",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Green synthesis of ZnO nanostructured electrode for supercapacitor.",
			"authors": "Marilene Morelli Serna;Eguiberto Galego;Tatiane Yumi Tatei;Bruna Rodrigues Lima;Rubens Nunes Faria Jr.",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Qobgm2rwE9oFNQeXP1FhB_kP57vAnEkX/view?usp=drivesdk"
		},
		{
			"code": "BTD6",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Molecular dynamics study of the interface structure and properties in Ti-6Al-4V ",
			"authors": "Tonya W Stone;Robert Escobar;Parshu Bhusal",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Qo3mrrWu-B2vZy6Tap-7F1v0UmdnpWIf/view?usp=drivesdk"
		},
		{
			"code": "BVF6",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Synthesis and characterization of silver nanoparticles on clay surface",
			"authors": "Vinicius Juvino Santos;Luiz Gustavo Hiroki Komatsu;Vijaya K. Rangari;Duclerc Fernandes Parra",
			"template": 0,
			"link": "https://drive.google.com/file/d/1qkr_aWciLsuRDuRbuHRRfLOfmRPmwApG/view?usp=drivesdk"
		},
		{
			"code": "BTCZ",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Nanoparticles for anticancer photodynamic therapy: Development, in vitro activity and biodistribution studies",
			"authors": "Ludmilla David de Moura;Níchollas Serafim Camargo;Ana Luísa Gouvêa Silva;Mayara Simonelly dos Santos;Ricardo Bentes de Azevedo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1QjIFmxM2KEISgn-U4h_Jq3x4yc-NUgle/view?usp=drivesdk"
		},
		{
			"code": "BTD2",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Production of noble metal nanoparticles by gas aggregation method",
			"authors": "Douglas Arnold Silveira Gioielli Santos;Antonio Domingues dos Santos;Valquiria Fernanda Gonçalves de Lima;Sergio Antonio Romero",
			"template": 0,
			"link": "https://drive.google.com/file/d/1qJdS1X7s6is3g3w3RzcHLLKQKkFb_VlF/view?usp=drivesdk"
		},
		{
			"code": "BSBC",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Industrial Manufacturing of Vertical Carbon Nanostructures for Energy Storage and Heat Transfer Applications",
			"authors": "Billyde Brown;Craig Green;Baratunde Cola",
			"template": 0,
			"link": "https://drive.google.com/file/d/1QIpJU6rrGCqtapnTGGUB8-kAJRgHWT15/view?usp=drivesdk"
		},
		{
			"code": "BS4B",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Microwave-assisted hydrothermal synthesis of Co3O4 nanostructured thin films for gas sensor application",
			"authors": "Anderson A. Felix;Elson Longo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1qH-CQQQXg59BkAbGuUddxcRUWHe4K9Hb/view?usp=drivesdk"
		},
		{
			"code": "BT6K",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Development of cellulose-based gels carrying carvacrol or linalool nanoencapsulated in chitosan nanoparticles",
			"authors": "Estefania Vangelie Ramos Campos;Jhones Luiz de Oliveira;Patrícia Luiza Freitas Proença;Daniele Ribeiro de Araujo;Leonardo Fernandes Fraceto",
			"template": 0,
			"link": "https://drive.google.com/file/d/1qfk2JFhyEkv0g6S87zzF9_VNaBCGNpBt/view?usp=drivesdk"
		},
		{
			"code": "BTBY",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Synthesis And Cytotoxic Activity Of Solid Lipid Nanoparticles Containing Docetaxel In Ovarian Carcinoma In Vitro.",
			"authors": "Barbara Yasmin Garcia Andrade;Márcia Cristina Oliveira Rocha;João Paulo Figueró Longo;Sônia Nair Báo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Q55GzGh3L91FHL0VD4A7kMJ2jh4QIBN2/view?usp=drivesdk"
		},
		{
			"code": "BSAS",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Superparamagnetic Magnetie/Chitosan/Co-octacarboxylic acid phthalocyanine composite for electrochemical sensors",
			"authors": "Bruno Bitarães Neto Salgado Brandão;Henrique Eisi Toma;Henrique Damaceno;Josué Martins Gonçalves;Koiti Araki;Tiago Araujo Matias",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Pt3nfNjH6oQ1VeLpWNRP544yXmzUM4HJ/view?usp=drivesdk"
		},
		{
			"code": "BTDN",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Rare earth compounds as smart materials to biological application",
			"authors": "Maria Claudia França da Cunha Felinto;Francine Franzotti da Silva Salvador;Leonardo H. C. Francisco;Everton Bonturim;Hermi Felinto Brito;Oscar Loureiro Malta;Ercules Teotonio",
			"template": 0,
			"link": "https://drive.google.com/file/d/1prGKh6DwbEc9lHS8JEmfaUCs58aXfyzB/view?usp=drivesdk"
		},
		{
			"code": "BS2G",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Impacts and Characteristics of Ferrate Resultant Particles in Water Treatment ",
			"authors": "Joseph Goodwill Goodwill;Kaoru Ikuma;David Reckhow;Joseph Gikonyo;Yanjun Jiang;Josh Cunningham;Xuyen Mai;John E. Tobiason",
			"template": 0,
			"link": "https://drive.google.com/file/d/1pqUwRkreGi4aVf5ZUCN2r2cBx6mfj80C/view?usp=drivesdk"
		},
		/*{
			"code": "BVAA",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Gold Nanoparticles synthetized with Aminolevulinic Acid for Theranostic: Photodynamic and Sonodynamic Therapies",
			"authors": "Karina de Oliveira Gonçalves;Letícia Bonfim;Daniel Perez Vieira;Lilia Coronato Courrol",
			"template": 0,
			"link": "https://drive.google.com/file/d/1PkMDN2xmVmGTjONNf5elOZIVtyauwf2A/view?usp=drivesdk"
		},*/
		{
			"code": "BRTD",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Surfactant mediated synthesis of silica nanoparticles using sugarcane ash waste as renewable source",
			"authors": "Suzimara Rovani;Jonnatan Julival Santos;Paola Corio;Denise Fungaro",
			"template": 0,
			"link": "https://drive.google.com/file/d/1pi-MDHCF6NCPAsZrBjINHtV7X3ovgXMD/view?usp=drivesdk"
		},
		{
			"code": "BTBA",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Electroxidation of phenylmethanol using nanostructured NiCe HDL as electrocatalysts",
			"authors": "Geovanne Lemos de Assis;Josué Martins Gonçalves;Juliana da Silva Bernardes;Koiti Araki",
			"template": 0,
			"link": "https://drive.google.com/file/d/1PgGWRVuZ3e-hm55oqbmxLRGX3aZozuyT/view?usp=drivesdk"
		},
		{
			"code": "BRTH",
			"area": "Nanoinformatics and Modeling",
			"type": "ORAL",
			"title": "Mechanical Response of Nanoporous Metals",
			"authors": "Diana Farkas",
			"template": 0,
			"link": "https://drive.google.com/file/d/1pAV7Y-_IHrXiYZCjTSwGjlgLr3vMexzj/view?usp=drivesdk"
		},
		{
			"code": "BTAY",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "A Nano-polymer sensor for ultrasensitive detection of early biomarkers",
			"authors": "Tianfu Wu",
			"template": 0,
			"link": "https://drive.google.com/file/d/1p46NPVurwVtXnpUj6gPaYYO5Z4kmjx2C/view?usp=drivesdk"
		},
		{
			"code": "BSAQ",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Nanfabrication of particles with tailored magnetic properties for biomedical applications using nanoimprint lithography.",
			"authors": "Ivan Nekrashevich;Mohammad Khodadadi;Chang Long;Dmitri Litvinov",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ozZHnVsdlTPf_hPXe2W16B4otNHEnhbB/view?usp=drivesdk"
		},
		{
			"code": "BTNN",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Magnetically aligned graphene for display and broader device applications",
			"authors": "Jiming Bao",
			"template": 0,
			"link": "https://drive.google.com/file/d/1OYtn-qG99JPKLz7HZt6T-EoDOHAIiCuL/view?usp=drivesdk"
		},
		{
			"code": "BS64",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Nanobrachytherapy and its challenges",
			"authors": "Maria Elisa Chuery Martins Rostelato;Carla Daruich Souza;Andreza A. D. C. C. Gonzalez;Beatriz Ribeiro Nogueira;Carlos Alberto Zeituni;Marc-André Fortin;Pascale Chevallier",
			"template": 0,
			"link": "https://drive.google.com/file/d/1OuH31XIBm3U9uqkHJMItDqtMI3pnnejZ/view?usp=drivesdk"
		},
		{
			"code": "BTBZ",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "TL and OSL properties of strontium aluminate nanocrystals applied to ionizing radiation dosimetry ",
			"authors": "Sonia H. Tatumi;Tainara Caroline Rocha;Alvaro de Farias Soares;Diego Renan Giglioti Tudela;Kátia Alessandra Gonçalves",
			"template": 0,
			"link": "https://drive.google.com/file/d/1onuegRNDuTERkZLjW0o7dob0PP6L7CzB/view?usp=drivesdk"
		},
		{
			"code": "BTBB",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Chitosan nanoparticles for nitric oxide delivery in the skin",
			"authors": "Milena Trevisan Pelegrino;Letícia C Silva;Tiago Rodrigues;Richard Weller;Amedea Barozzi Seabra",
			"template": 0,
			"link": "https://drive.google.com/file/d/1oGvysavOms4KB1NTjalmN75qcByoR57t/view?usp=drivesdk"
		},
		{
			"code": "BTFE",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Hybrid organic/inorganic devices based on nanomembranes",
			"authors": "Carlos César Bof Bufon",
			"template": 0,
			"link": "https://drive.google.com/file/d/1obSC5mjAgCbUq5K_6kRtzWZkg_liz_6U/view?usp=drivesdk"
		},
		{
			"code": "BVFE",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Synthesis and characterization of modified electrodes based on Poly(o-ethoxyaniline) and Carbon Nanotubes Composites",
			"authors": "Vinícius Bianchi Soares;Fábio Ruiz Simões;Luís Antonio Polaci",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Nxc-C-GbCuCeUwrfXgUDLw-SiON1pEzw/view?usp=drivesdk"
		},
		{
			"code": "BVGX",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Solid lipid nanoparticles relies on endosomal acidification for intracellular DNA release in HEK239T cells",
			"authors": "Marcelo Bispo de Jesus;Allan Radaic",
			"template": 0,
			"link": "https://drive.google.com/file/d/1NuuFm5eVd5bu6LGgp_ROeqVm4B41Fz29/view?usp=drivesdk"
		},
		{
			"code": "BSGT",
			"area": "Nanoinformatics and Modeling",
			"type": "ORAL",
			"title": "Experimental Study of Radiation Influence onThermophysical Properties of Al2O3 and ZrO2 Nanofluids",
			"authors": "Marcelo da Silva Rocha;Priscila Gomes Ferreira Pinho;Fábio Branco Vaz;Delvonei Alves Andrade",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ns7t0-4mQ7uN-vVCqoYvL2ejn2ftH4P3/view?usp=drivesdk"
		},
		{
			"code": "BTG2",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "From Gold Phytomining to the Fate of Nanoparticles in Terrestrial Plants:  Synchrotron-based Studies",
			"authors": "Jorge L. Gardea-torresdey",
			"template": 0,
			"link": "https://drive.google.com/file/d/1NqymG-uRQh7Qk0rl21O-tcl03db-_X1o/view?usp=drivesdk"
		},
		{
			"code": "BS4J",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Monitoring Nanoparticle Stability And Mobility In Whole Blood And Tissues In Situ",
			"authors": "Ana C. Bohorquez;Mythreyi Unni;Andreina Chiu Lam;Sayali Belsare;Lori P. Rice;Chris Pampo;Dietmar W. Siemann;Carlos Rinaldi",
			"template": 0,
			"link": "https://drive.google.com/file/d/1NqUpYyQdFgc9uverw_E7aCA1ihLR4VXe/view?usp=drivesdk"
		},
		{
			"code": "BVE4",
			"area": "Nanoinformatics and Modeling",
			"type": "ORAL",
			"title": "Plasmonic properties of multilayer Albumin/gold hybrid Nanoparticles ",
			"authors": "Constanza Y. Flores;Estefania Achilli;L. Joaquin Mendoza Herrera;Daniel Carlos Schinca;Mariano Grasselli",
			"template": 0,
			"link": "https://drive.google.com/file/d/1nJciG0-hOS1zqMAYnumckzoH_HO_Y6v3/view?usp=drivesdk"
		},
		{
			"code": "BTPD",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Multimodal Correlative Microscopy od 2D Materials",
			"authors": "Fernando Vargas",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ngYhbrlUBipNrIVPswSh4MKa7PE0gXhI/view?usp=drivesdk"
		},
		{
			"code": "BS44",
			"area": "Nanoinformatics and Modeling",
			"type": "ORAL",
			"title": "Mechanical Factors in Cell-Rotating Nanoparticle Interactions via Computational Modeling",
			"authors": "Xianqiao Wang;Liuyang Zhang",
			"template": 0,
			"link": "https://drive.google.com/file/d/1NAF4elbtBPeoYITLc-ril3zcwflfxWSs/view?usp=drivesdk"
		},
		{
			"code": "BTBP",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Influence of oxidation process in the stability of nanoemulsions based on buriti oil (Mauritia flexuosa) ",
			"authors": "Leonardo Otávio Silva;Marina Carvalho Sampaio;Ricardo Bentes de Azevedo;Graziella A. Joanitti",
			"template": 0,
			"link": "https://drive.google.com/file/d/1n1hQYwKUgCFPoe3t12sgaZIEShTWZQh0/view?usp=drivesdk"
		},
		{
			"code": "BTAF",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Study the effect of high energy milling of diamond CVD",
			"authors": "Cristiane Costa Wachesk;Carolina Ramos Hurtado Guimarães;Patricia Marcondes dos Santos;Dayane Batista Tada;Getulio de Vasconcelos;Jesus Manuel Gutierrez Bernal;Vladimir Jesus Trava-Airoldi",
			"template": 0,
			"link": "https://drive.google.com/file/d/1N0SA0LTcFQr6MdarcFOa7uxiplk6PVZq/view?usp=drivesdk"
		},
		{
			"code": "BRSK",
			"area": "Sustainability",
			"type": "ORAL",
			"title": "The applications of nanomaterials in advanced oxidation processes to remove organic contaminants",
			"authors": "Dionysios Demetriou Dionysiou",
			"template": 0,
			"link": "https://drive.google.com/file/d/1My6OnojZY_vTiSWoxXA-saachwjpYkK2/view?usp=drivesdk"
		},
		{
			"code": "BTAJ",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Graphene oxide as a mechanical reinforcement filler for PLA/Hydroxyapatite composites",
			"authors": "André da Silva Siqueira;Pablo Andrés Riveros Muñoz;Guilhermino José Macedo Fechine",
			"template": 0,
			"link": "https://drive.google.com/file/d/1MKRsIfIa3c5vYJcH5iqb4sPHC1ECd0dq/view?usp=drivesdk"
		},
		{
			"code": "BS2Q",
			"area": "Education",
			"type": "ORAL",
			"title": "Nano Tools course at the University of Rhode Island",
			"authors": "Vinka Craver;Geoffrey Bothun",
			"template": 0,
			"link": "https://drive.google.com/file/d/1mK-XBc_6b6MHXaxSijaOstQ8CCrjowFR/view?usp=drivesdk"
		},
		{
			"code": "BSAG",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Synthesis of High Stable Gold (198) Nanoparticles for Radiotherapy",
			"authors": "Jonnatan Julival Santos;Jessica Leal;Luis Alberto Pereira Dias;Sergio Hiroshi Toma;Paola Corio;Koiti Araki;Frederico Genezini;Kattesh V Katti;Ademar Benévolo Lugão",
			"template": 0,
			"link": "https://drive.google.com/file/d/1MJlvbZYQdqa1v8fEeBD5j9ZoB6dcNlLW/view?usp=drivesdk"
		},
		{
			"code": "BVDX",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Radiation synthesis of metal oxide nanoparticles",
			"authors": "Mats Jonsson;Inna Soroka",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Ma7TCV8OpulabKWy7t-giunwWl5XECa-/view?usp=drivesdk"
		},
		{
			"code": "BTCC",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Magnetite nanoparticles coated with polydopamine for magnetic hyperthermia",
			"authors": "Caio José Perecin;Beatriz Montilha Tirich;Adriano Marim Oliveira;Natália Neto Pereira Cerize;Laudemir Carlos Varanda",
			"template": 0,
			"link": "https://drive.google.com/file/d/1L_IHQReDuGdqIgqGWAC6uRvH7uLCpZYo/view?usp=drivesdk"
		},
		{
			"code": "BVG6",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Characterization of the addition of silver nanoparticles in thermoplastic elastomer films (TPE)",
			"authors": "Camila Bassetti de Oliveira;Leonardo Guedes Marchini;Duclerc Fernandes Parra",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Lz5JpS7l3up-xP8fC7qtbO47aa_DgnQj/view?usp=drivesdk"
		},
		{
			"code": "BTCE",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Mixed hydroxide synthesis of nanostructured Ni/Pb as modified electrode material for piroxicam analysis",
			"authors": "Anabel Laza;Josué Martins Gonçalves;Pamela de Oliveira Rossini;Juliana da Silva Bernardes;Koiti Araki;Lúcio Angnes",
			"template": 0,
			"link": "https://drive.google.com/file/d/1l-44QGF_sR6Qcz6-cuHC5asV_OdhrqTB/view?usp=drivesdk"
		},
		{
			"code": "BVEG",
			"area": "Nanoinformatics and Modeling",
			"type": "POSTER",
			"title": "Innovation trajectories: an IPEN´s nanotechnology competence roadmapping to match´s market mechanisms",
			"authors": "Aline A. Perini;Anderson Zanardi Freitas",
			"template": 0,
			"link": "https://drive.google.com/file/d/1kyfki36F3eNt7zFws4qUfw-JAsp5YQ99/view?usp=drivesdk"
		},
		{
			"code": "BSAF",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Techniques of obtaining and physical properties of the graphene",
			"authors": "Rudolf Arthur Triana;Jhon Jairo Olaya",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Ktlb8r9a7r00f1EUe34p9auXYdPwKFoh/view?usp=drivesdk"
		},
		{
			"code": "BTCN",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Incorporation of silver nanoparticles by the radiation process in Central Venous Catheter (CVC) of polyurethane coated with titanium oxide for antimicrobial activity",
			"authors": "Leonardo Gondim de Andrade Silva;Patricia Freitas;Thiago Lewis Reis Hewer",
			"template": 0,
			"link": "https://drive.google.com/file/d/1KqBp9TH94aQyialYkL-BQARCVSLzaM4C/view?usp=drivesdk"
		},
		{
			"code": "INCO",
			"area": "Biological-nano Interactions",
			"type": "PAPER",
			"title": "Paper - Incorporation of silver nanoparticles by the radiation process in Central Venous Catheter (CVC) of polyurethane coated with titanium oxide for antimicrobial activity",
			"authors": "Patricia Freitas;Thiago Lewis Reis Hewer;Leonardo Gondim de Andrade Silva",
			"link": "https://drive.google.com/file/d/1VAcmtWbILzH8XVxNPrMZqpdouk5eOx8_/view"
		},
		{
			"code": "BRNV",
			"area": "Sustainability",
			"type": "ORAL",
			"title": "Nano-biosensors: From Prototypes to Safer Foods for Consumers",
			"authors": "Wunmi Sadik",
			"template": 0,
			"link": "https://drive.google.com/file/d/1KpyQfSRt4Ui9atbtZuAv8biARTHKbj6s/view?usp=drivesdk"
		},
		{
			"code": "BS2Z",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Synthesis and physicochemical characterization of ZnO quantum dots and its use in the biosensors development",
			"authors": "Paula Andrea Uribe;Claudia Cristina Ortiz;John Jairo Castillo;Sergio Ismael Blanco;Jorge Andres Gutierrez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1KLqUZNlWpvMd9DMVqkzZc3e17sXh7NKh/view?usp=drivesdk"
		},
		{
			"code": "BS42",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Injection Molded Micro-fluidic Device for Synthesizing Liposome in Nanoscale",
			"authors": "Doo-Sun Choi;Sang-Won Woo;Jin-Hwan Kim;Han-Bit Lee;Jae-Sung Yoon;Kee-Sung Kim;Yeong-Eun Yoo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1kl8MR6FZqDR_hCgQ0klSMhZMu8reASL8/view?usp=drivesdk"
		},
		{
			"code": "BSAN",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Polymeric nanoparticles functionalization using EDC carbodiimide and Maleimide",
			"authors": "Rayany Stôcco Braido;Débora Vieira Way;Izabella Ferreira Campos;Helen Conceição Ferraz;José Carlos Pinto",
			"template": 0,
			"link": "https://drive.google.com/file/d/1kJ55eOGM5GoHj0k2xi48i4WpRbYpWytS/view?usp=drivesdk"
		},
		{
			"code": "BRTV",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Nanomedicine for targeted photobiological processes as an innovative therapeutic strategy in the treatment of brain tumors",
			"authors": "Leonardo Barcelos de Paula;Maryanne Trafani de Melo;Antonio Claudio Tedesco",
			"template": 0,
			"link": "https://drive.google.com/file/d/1kBzH4vdTBoNpjx8xR7ZgVFmDc5TRTrGk/view?usp=drivesdk"
		},
		{
			"code": "BV6P",
			"area": "Sustainability",
			"type": "POSTER",
			"title": "Synthesis and application of functionalized iron oxide nanoparticles for the surface oil removal",
			"authors": "Yasmin Luz Fernandes;Débora Selene Cardona;Geórgia Labuto Araújo;Paula S. Haddad",
			"template": 0,
			"link": "https://drive.google.com/file/d/1JYnCwr3uzI06qkfqYfvxIiRFyBllq82E/view?usp=drivesdk"
		},
		{
			"code": "BRS6",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Alterations of Gene and Protein Expressions of Escherichia coli Exposed to Carbon Nanotubes",
			"authors": "Eakalak Khan",
			"template": 0,
			"link": "https://drive.google.com/file/d/1jxgNhyG9_hA9QZRWj19wSMEjJMSoNqqo/view?usp=drivesdk"
		},
		{
			"code": "BRHV",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Influence of organic coating materials for the antibacterial effect of TiO2 nanoparticles",
			"authors": "SungHee Joo;Soyoung Baek",
			"template": 0,
			"link": "https://drive.google.com/file/d/1jvWtwiQawO2itaSsZ18KXeOX16Go7Brs/view?usp=drivesdk"
		},
		{
			"code": "BSRZ",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "Nanoparticle-surface interactions: implications for nanoscale dust deposition and resuspension",
			"authors": "Marina Eller Vance",
			"template": 0,
			"link": "https://drive.google.com/file/d/1JuAo_l5SO7BMrgCxwOV6XBxhA5bvRwA7/view?usp=drivesdk"
		},
		{
			"code": "BRYH",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Behavior of polysulfone nanocomposite filtration membranes under hypochlorite ageing",
			"authors": "Priscila Anadão;Hélio Wiebeck",
			"template": 0,
			"link": "https://drive.google.com/file/d/1JtqhU8--Tp4EgcJrwbse1VP2ZRTDG1sL/view?usp=drivesdk"
		},
		{
			"code": "BTAC",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Photocatalytic activity of ZnO NP obtained by controlled precipitation: Effect of precursor and synthesis temperature",
			"authors": "Morgana de Medeiros Machado;Cesar Augusto Jaramillo-Paez;José Antonio Navío;Adriano Michael Bernardin",
			"template": 0,
			"link": "https://drive.google.com/file/d/1joRbs13meosQqTswfqBsfmSeUNHceOCQ/view?usp=drivesdk"
		},
		{
			"code": "BNMQ",
			"area": "Sustainability",
			"type": "POSTER",
			"title": "Evaluating the life cycle benefits of nanoenabled polymers through food waste avoided ",
			"authors": "Andrea Hicks;Edward Westerband",
			"template": 0,
			"link": "https://drive.google.com/file/d/1JL5um56UVr_yu6QDzwTmYSqIpQL8Ecv8/view?usp=drivesdk"
		},
		{
			"code": "BRZX",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Synthesis of cerium oxide nanopowders for improving catalysts electroactivity in direct ethanol fuel cells",
			"authors": "Elaine Farneze de Camargo;Guilherme Cordeiro;Monique Carolina Lima Santos;Conrado de Vascancellos Pereira;Valter Ussui;Nelson Batista de Lima;Almir Oliveira Neto;Dolores Ribeiro Ricci Lazar",
			"template": 0,
			"link": "https://drive.google.com/file/d/1JGRwhoReSrYcatXHle5Nvyi_Q-ztB1x6/view?usp=drivesdk"
		},
		{
			"code": "BSBA",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Nanoscale Iron Triggers Iron Uptake in Lettuce (Lactuca sativa) through LsHA2 Gene Regulation",
			"authors": "Mohammad E Hossain;Robert S Brueggeman;Achintya N Bezbaruah",
			"template": 0,
			"link": "https://drive.google.com/file/d/1je8cexpCTF3EkdvrmK3sAtOhpQQWOzjt/view?usp=drivesdk"
		},
		{
			"code": "BTMD",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "SYNTHESIS AND CHARACTERIZATION OF EVA/CLAY FLEXIBLE FILMS TREATED BY ELECTRON BEAM RADIATION",
			"authors": "Esperidiana A. B. Moura;Aline M. Lodis;Marcus Vinicius Seixas;Francisco Rolando Valenzuela Diaz;Olgun Güven",
			"template": 0,
			"link": "https://drive.google.com/file/d/1It_TuNsxuSt13qan7k7QLq-04bH3H19U/view?usp=drivesdk"
		},
		{
			"code": "BTRY",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Protein corona evaluation of magneto-luminescent nanoprobe of Fe3O4 with engineered surface chemistry by calixarene and Eu3+ TTA complex",
			"authors": "Latif U. Khan;Romana Petry;Diego Stefani Teodoro Martinez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1iMNOcdIGBgI3vPjGd4c8svIPe4G8py0U/view?usp=drivesdk"
		},
		{
			"code": "BVEE",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Functionalized-radiolabeled Tenorite/Hydroxyapatite nanoparticles as theranostic agent for osteosarcoma: synthesis, characterization and biological in vitro assays",
			"authors": "Marcelo Fernandes Cipreste;Anderson Maia Peres;Marcelo Coutinho de Miranda;Dawidson Assis Gomes;Veronica de Carvalho Teixeira;Waldemar Augusto de Almeida Macedo;Edésia Martins Barros de Sousa",
			"template": 0,
			"link": "https://drive.google.com/file/d/1IMBQzC3RW5gz7xsyTI7uUkrzYyQo-29f/view?usp=drivesdk"
		},
		{
			"code": "BTRS",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "The influence of age on biodistribution and biocompatibility of citrate-coated magnetic nanoparticles administered in mice ",
			"authors": "Willie Oliveira Pinheiro;Zulmira Guerrero Marques Lacava;Maria Luiza Fascineli;Marcelo Henrique Sousa;Marcos Célio Almeida;Gabriel Ribeiro Farias;Frederico Hillesheim Hosrt",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ik1TDcdFosdybbh5Wq2L4Zd--G1QXBkw/view?usp=drivesdk"
		},
		{
			"code": "BTCT",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Nebulizabled archaeolipid nanovesicles: azithromycin incorporation and interaction with pulmonary surfactant",
			"authors": "María Julia Altube;Andrea Cutro;Federico Parra;María Jose Morilla;Edgardo Anibal Disalvo;Eder Lilia Romero",
			"template": 0,
			"link": "https://drive.google.com/file/d/1I5rQwWCbXHdnBv97LKoG7XOyZQn6MIzh/view?usp=drivesdk"
		},
		{
			"code": "BSAX",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Barrier properties of Polyethylene/Poly(vinyl alcohol) films containing silica and carbon black",
			"authors": "Pedro Henrique Vieira;Alberto Claudio Habert;Jane Hitomi Fujiyama-Novak;Helen Conceição Ferraz",
			"template": 0,
			"link": "https://drive.google.com/file/d/1I56su9o10R8MvXw8erwovr-UR1P0hxay/view?usp=drivesdk"
		},
		{
			"code": "BTMS",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Evaluation of the in vitro and in vivo toxicity of gold nanoparticles synthesized by green nanotechnology",
			"authors": "Jorge Gabriel dos Santos Batista;Janaina A. G. Barros;Gustavo H. C. Varca;Sizue Ota Rogero;Adriana Kuchinski Cavalcante;Fernanda Carolina Mamede;José Rogero;Ademar Benévolo Lugão",
			"template": 0,
			"link": "https://drive.google.com/file/d/1hwXD5H7SWwDySHroquOr-BuwMTr8qebo/view?usp=drivesdk"
		},
		{
			"code": "BRXH",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Oxidation of methanol on PtRuIn/C in alkaline medium: Effect of metals on the electrocatalytic activity",
			"authors": "Monique Carolina Lima Santos;Almir Oliveira Neto",
			"template": 0,
			"link": "https://drive.google.com/file/d/1hqXTf7DoEFA06q5UnslEMNEl18QAvuZY/view?usp=drivesdk"
		},
		{
			"code": "BTBN",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Ceramic materials as corrosion protective agents for urethanic films on steel ABNT 1020 fosphotated",
			"authors": "Gonçalo Siqueira;Hélio Wiebeck;Leonardo Gondim de Andrade Silva;José Mauro Diniz Oliveira;Rocío del Pilar Bendezú Hernandez;Fábio Jose Esper",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Hq0xsSuAO7BKRYAy7P4d-jaCe_Lx4ory/view?usp=drivesdk"
		},
		{
			"code": "BTMM",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Nose-to-brain delivery of insulin enhanced by radiation-engineered nanogels",
			"authors": "Clelia Dispenza",
			"template": 0,
			"link": "https://drive.google.com/file/d/1hpFIB-vQzGoguVGxZDR6dHK3VDqZEkSe/view?usp=drivesdk"
		},
		{
			"code": "BSNZ",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "EB irradiation of PVP on theta solution to produce nanogels",
			"authors": "Yasko Kodama;Patrick Severich;Rodrigo da Costa Dutra",
			"template": 0,
			"link": "https://drive.google.com/file/d/1HpAE4n4K2bhvkisuhfCh3X0ks0bwfuRm/view?usp=drivesdk"
		},
		{
			"code": "BRZG",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Application of quantum dots in photocatalysis",
			"authors": "Anna Malankowska;Adriana Zaleska-Medynska",
			"template": 0,
			"link": "https://drive.google.com/file/d/1hgpC0PrHonw6bSG99cJKPdZ2bbXP7UTZ/view?usp=drivesdk"
		},
		{
			"code": "BTAS",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Formation of titania mesoporous nanocomposites in latex beads by EISA process. ",
			"authors": "Antony Ernesto Santos Silva;Anthony Maik Correia da Silva;Phabyanno Rodrigues Lima;Jonas dos Santos Sousa;Alan John Duarte de Freitas;Johnnatan Duarte de Freitas;Anthony Maik Correia da Silva",
			"template": 0,
			"link": "https://drive.google.com/file/d/1HGbvSuyuolVvZKUQ4Vi8zB4eXqwpHiCv/view?usp=drivesdk"
		},
		{
			"code": "BVFB",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Synthesis and characterization of silver nanoparticles functionalized with TEGDMA",
			"authors": "Mariana de Jesus Santos;Tamiris Martins Ribeiro dos Santos;Luiza Mello de Paiva Campos;Camila Bassetti de Oliveira;Duclerc Fernandes Parra",
			"template": 0,
			"link": "https://drive.google.com/file/d/1H5ZOXSQ2aibGbaAFMtpOUASSVyAvZuA4/view?usp=drivesdk"
		},
		{
			"code": "BS4C",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Hybrid Additive Process for Coating Patterned and Heterogeneous Thin Films ",
			"authors": "Tequila Harris Harris;Ara Parsekian",
			"template": 0,
			"link": "https://drive.google.com/file/d/1h1WPpKrtlV-2y8WBwvMaDgWFdCZPRmnd/view?usp=drivesdk"
		},
		{
			"code": "BVGK",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Radiation-induced \"one pot\" synthesis for cell therapies",
			"authors": "Ademar Benévolo Lugão",
			"template": 0,
			"link": "https://drive.google.com/file/d/1GYYuE50sNo8lhUPrWdKXA2QdA4NIR0cJ/view?usp=drivesdk"
		},
		{
			"code": "BTB6",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Characterization of Polyelectrolyte Membranes with in-situ Metal-Oxide Nanoparticles and Transport Properties",
			"authors": "Jonathan Colon;John M. Landers;Aleksey Vishnyakov;Alexander V. Neimark",
			"template": 0,
			"link": "https://drive.google.com/file/d/1GyhUctOVKvSzh2xf6HauZ5krre41-Ogz/view?usp=drivesdk"
		},
		{
			"code": "BVGD",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Sustainable synthesis of transition metals/graphene oxide nanocomposites by electron beam irradiation",
			"authors": "Solange Kazumi Sakata;Luiza Ferreira Sobrinho;Raynara Maria Silva Jacovone;Jaqueline Jamara Souza Soares;Flavio Kiyoshi Tominaga;Lúcio Angnes;Rafael H L Garcia",
			"template": 0,
			"link": "https://drive.google.com/file/d/1GUR5mjmXMkV6N8jvptD_MNPlPLw6YE1Y/view?usp=drivesdk"
		},
		{
			"code": "BVDH",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Delivery of 5-fluorouracil to cancer cells by gold nanoparticles functionalized with antibodies for human epidermal growth factor receptors",
			"authors": "Raquel Liszbinski;Flávia Sardela de Miranda;Carolina Mendonça Gorgulho;Graziela Gorete Romagnoli;Caroline Rodrigues Basso;Ramon Kaneno",
			"template": 0,
			"link": "https://drive.google.com/file/d/1GpOgXEZz6tC79SfwcmgG2IrUUZU3uO3F/view?usp=drivesdk"
		},
		{
			"code": "BRKF",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Aqueous stability of black phosphorus: Aggregation and degradation mechanisms of a novel 2-dimensional nanomaterial",
			"authors": "S. Drew Story; Linda M. Guiney; Mark C. Hersam;Sharon L. Walker",
			"template": 0,
			"link": "https://drive.google.com/file/d/1gB_fC1GdwA1W2ElGM_tChj432ieV-6nj/view?usp=drivesdk"
		},
		{
			"code": "BTJM",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Comparison of the synthesis of pseudoboehmite in the presence of acetates and sodium chloride",
			"authors": "Terezinha Jocelen Masson;Antônio Hortêncio Munhoz Jr.;Matheus Francelino Bezerra da Silva;Alber Luiz do Nascimento;Leila Figueiredo de Miranda;Denison Angelotti Moraes",
			"template": 0,
			"link": "https://drive.google.com/file/d/1GAC2CFdHWGEIzTkqDfWVekf96lL6wpNp/view?usp=drivesdk"
		},
		{
			"code": "BVAY",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Obtaining of a hydrogel gel dressing of PVP with nanosilver for deep and complex wounds",
			"authors": "Mara Tânia Silva Alcântara;Camila Mariana Coutinho;Maria José Alves Oliveira;Mara Mello Leite Munhoz;Ademar Benévolo Lugão",
			"template": 0,
			"link": "https://drive.google.com/file/d/1gA8DGMxcBMpz-OkdVZckeyxZHHoTzaHn/view?usp=drivesdk"
		},
		{
			"code": "BSRF",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Spin-Valve Based Magnetoresistive Nanoparticle Detector for Applications in Biosensing ",
			"authors": "Wenlan Qiu;Long Chang;Yu-Chi Liang;Julia Litvinov;Jing Guo;Yi-Ting Chen;Binh Vu;Katerina Kourentzi;Shoujun Xu;T. Randall Lee;Youli Zu;Richard Willson;Dmitri Litvinov",
			"template": 0,
			"link": "https://drive.google.com/file/d/1g9fIqfwP3SwXPkBzudQeC8vBlc5k4jH7/view?usp=drivesdk"
		},
		{
			"code": "BRZF",
			"area": "Ecological-nano interactions",
			"type": "POSTER",
			"title": "Nanosize fractions of plastic contamination in urban waters and their implication in ecological systems",
			"authors": "Dounia El Khatib;Gang Wang;Vinka Craver",
			"template": 0,
			"link": "https://drive.google.com/file/d/1G-3wfakYtD5-RW8w3Wp73ZFHMz5Q0C6t/view?usp=drivesdk"
		},
		{
			"code": "BTBW",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Nanostructured mixed Ni/Pt hydroxides electrodes for amperometric determination of hydralazine",
			"authors": "Nathália Florencia Barros Azeredo;Pamela de Oliveira Rossini;Josué Martins Gonçalves;Geovanne Lemos de Assis;Koiti Araki;Lúcio Angnes",
			"template": 0,
			"link": "https://drive.google.com/file/d/1fPCK5xTUUuqQjj3-q0UCN4HYdv0hbetp/view?usp=drivesdk"
		},
		{
			"code": "BV4P",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Obtaining Nanodiamonds from Diamonds CVD by Ultrasonic Cavitation in Different Solvents",
			"authors": "Carolina Ramos Hurtado Guimarães;Cristiane Costa Wachesk;Alexandre Martins Santos;Vladimir Jesus Trava-Airoldi;Dayane Batista Tada",
			"template": 0,
			"link": "https://drive.google.com/file/d/1fhC9E4xRmehAvlWz1PexDAwXtkKT8Lz3/view?usp=drivesdk"
		},
		{
			"code": "BTBT",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Graphene Oxide Associated with Aluminum Chloride-Phthalocyanine as Agents for Combined Therapies ",
			"authors": "Ana Luísa Gouvêa Silva;Mayara Simonelly dos Santos;Ludmilla David de Moura;Leonardo Giordano Paterno;Paulo Eduardo Souza;Ricardo Bentes de Azevedo;Sonia Nair Báo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1FadKslz43mFPtXJBbdTwANslFr1E94fH/view?usp=drivesdk"
		},
		{
			"code": "BTKG",
			"area": "Sustainability",
			"type": "POSTER",
			"title": "Characterization of Mining Waste as Nanomaterial",
			"authors": "Maria Lucia Pereira Antunes;Antônio Hortêncio Munhoz Jr.;Carime dos Santos Souza;Guillermo Rafael Beltran Navarro;Fabiano Tomazini Conceição",
			"template": 0,
			"link": "https://drive.google.com/file/d/1F8F9wRMrmQC7jkoyghz3tvNkoTBE5LEw/view?usp=drivesdk"
		},
		{
			"code": "BRTE",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Membrane Disruption Induced by Nanoparticles with Cationic Charge and Protein Corona",
			"authors": "Zehui Xia;April Woods;Ian Burgess;Boris Lau",
			"template": 0,
			"link": "https://drive.google.com/file/d/1F4xlwKLF1C49EdZ0redXimwUXzBbOpjb/view?usp=drivesdk"
		},
		{
			"code": "BSX6",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Decoupled Hierarchical Structures for Suppression of Leidenfrost Phenomenon",
			"authors": "Hadi Ghasemi",
			"template": 0,
			"link": "https://drive.google.com/file/d/1EZyeF1LH4tfK4XwQDJHKKl5AK9TjvZ-o/view?usp=drivesdk"
		},
		{
			"code": "BRYD",
			"area": "Sustainability",
			"type": "ORAL",
			"title": "Title Global Health Impacts of Nanotechnology Law: The Legend of Asbestos That Haunts Nanotechnology Innovations",
			"authors": "Ilise Feitshans Feitshans",
			"template": 0,
			"link": "https://drive.google.com/file/d/1eY2SiLlw56YcpHEn46k4KaKPYC3Tggo5/view?usp=drivesdk"
		},
		{
			"code": "BTBV",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "PVMMA/castor oil nanocapsules loaded with doxorubicin: Development and evaluation of cytotoxicity in cancer cells",
			"authors": "Janaina Moreira Coelho;Níchollas Serafim Camargo;Rayane Ganassin;Luis Alexandre Muehlmann",
			"template": 0,
			"link": "https://drive.google.com/file/d/1eWqScz6ha3IpfRZV1PEK3kH-o2ZPnMkk/view?usp=drivesdk"
		},
		{
			"code": "BTCS",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Hydrogels with silver nanoparticles for wound treatment",
			"authors": "Maria José Alves Oliveira;Jonnatan Julival Santos;Sergio Hiroshi Toma;Mara Tânia Silva Alcântara;Pablo Antonio Vázquez Salvador;Koiti Araki;Ademar Benévolo Lugão",
			"template": 0,
			"link": "https://drive.google.com/file/d/1EqWIl7hnxfn4d0bfp3t8sEtGwhXNEVmz/view?usp=drivesdk"
		},
		{
			"code": "BTCV",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Bovine plasma protein corona associated with multiwalled carbon nanotubes: characterization, long-term water dispersion and ecotoxicity",
			"authors": "Carlos Henrique Zanini Martins;Tatiani Brenelli Lima;Fabio Cesar Gozzo;Jefferson Bettini;Rodrigo Villares Portugal;Gisela Aragão Umbuzeiro;Oswaldo Luiz Alves;Diego Stefani Teodoro Martinez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1EPNYeRRgVLJulbn7K4Ap58uXH0ediYgs/view?usp=drivesdk"
		},
		{
			"code": "BTBS",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Hardwired for success: Ni supported CeO 2-Sm 2 O 3 nanowires as a super stable catalyst for ethanol steam reforming",
			"authors": "Thenner Silva Rodrigues;Arthur Brucoli Leme de Moura;Felipe A. e Silva;Eduardo G. Candido;Vanderlei Sérgio Bergamaschi;João Coutinho Ferreira;Marcelo Linardi;Fábio Coral Fonseca",
			"template": 0,
			"link": "https://drive.google.com/file/d/1eND4lUHgX1Ns_A2BTSjUYE08N8we_Bac/view?usp=drivesdk"
		},
		{
			"code": "BSSP",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Antifungal effects of nanoparticles: graphene, graphene oxide, molybdenum trioxide (h and α)",
			"authors": "Debora Frigi Rodrigues",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ELLVnQpXfbIFHeyrkxtny_ntD3qhiWIk/view?usp=drivesdk"
		},
		{
			"code": "BRY4",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Engineering graphene surface toward design of aggregation-resistant catalyst supports for advanced energy conversion",
			"authors": "Guilherme Cordeiro;Elaine Farneze de Camargo;Valter Ussui;Nelson Batista de Lima;Almir Oliveira Neto;Dolores Ribeiro Ricci Lazar",
			"template": 0,
			"link": "https://drive.google.com/file/d/1EK69bJgAjYEorNNdRzpsw1ofi2Uv33Tq/view?usp=drivesdk"
		},
		{
			"code": "BRYF",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Immobilization of Casein-Coated Silver Nanoparticles on Cellulose Acetate Membranes for Biofouling Control",
			"authors": "Isabel Cristina Escobar;Conor Sprick;Sneha Chede;Vinka Craver",
			"template": 0,
			"link": "https://drive.google.com/file/d/1EIzdvK5bXU5NQKQW1bg_AKqITXm_K78n/view?usp=drivesdk"
		},
		{
			"code": "BSSC",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Structural, thermal, magnetic and electrical properties of polyaniline/CoFe2O4 nano-composites with special reference to the dye removal capability",
			"authors": "Yasser Mohammed Al Angari",
			"template": 0,
			"link": "https://drive.google.com/file/d/1E8f5WWau6Pocu5JP1HEd4IkfFm0gGafu/view?usp=drivesdk"
		},
		{
			"code": "BS2X",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Tumor-Penetrating Aerosol Nanocomposite Microparticles for the Treatment of Lung Cancer",
			"authors": "Elisa Angela Torrico Guzmán;Qihua Sun;Celia Dunn;Jake Morris;Samantha Meenach",
			"template": 0,
			"link": "https://drive.google.com/file/d/1E5xcQyd3LOX7_PfgSs1oZJcjWk2NNTkD/view?usp=drivesdk"
		},
		{
			"code": "BRZA",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Development of Nanoparticulates Capable of Penetrating Pulmonary Physiological Barriers ",
			"authors": "Samantha Meenach",
			"template": 0,
			"link": "https://drive.google.com/file/d/1DvatT6LFWQRAC3jkwsjKpUrCq4Xuv3lq/view?usp=drivesdk"
		},
		{
			"code": "BRKJ",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "The smart design of graphitic carbon nitride for photocatalytic water treatment with visible light irradiation",
			"authors": "Qinmin Zheng",
			"template": 0,
			"link": "https://drive.google.com/file/d/1DUp45guabpYh9_APVi_JzS9HrPgceFHX/view?usp=drivesdk"
		},
		{
			"code": "BTTJ",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Biogenic silver nanoparticles induce hepatic toxicity and oxidative stress in male wistar rats",
			"authors": "Luiz Alberto Bandeira Ferreira;Monique Culturato Padilha Mendonça;Angela Giovana Batista;Emanueli do Nascimento da Silva;Mario Roberto Maróstica Junior;Maria Alice Cruz-Hofling;Solange Cadore;Nelson Durán;Marcelo Bispo de Jesus",
			"template": 0,
			"link": "https://drive.google.com/file/d/1dsVjJkRq21W8aYeYgfRPoqYm_cfwx6Vx/view?usp=drivesdk"
		},
		{
			"code": "BRTZ",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "Effects of engineered nanoparticles on plants root diseases and crop health",
			"authors": "Roberto Javier de La Torre-Roche;Cristian Plaza-Pérez;Chuanxin Ma;Luca Pagano;Sanghamitra Majumdar;Nubia Zuverza-Mena;Jason White;Wade Elmer",
			"template": 0,
			"link": "https://drive.google.com/file/d/1dp5YZIYPEwTKFV7g3ko-sIjH3FhBm39B/view?usp=drivesdk"
		},
		{
			"code": "BTBH",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Synthesis and Characterization of superparamagnetic magnetite-silica core-shell nanoparticles",
			"authors": "Francine Ramos Scheffer;Karim Bouchmella;Mateus Borba Cardoso",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Dkb_T44slKuU9_gL_zclLY7SNUYrIrdZ/view?usp=drivesdk"
		},
		{
			"code": "BVAE",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Green Synthesis and Characterization of Enzymatically Active Gold Nanoparticles  Using Template of Bromelain",
			"authors": "Adrianne Marlise M. Brito;Iseli Lourenço Nantes-Cardoso",
			"template": 0,
			"link": "https://drive.google.com/file/d/1DG16CqkvSUkh9faC59bbu5LwCg5BPr7G/view?usp=drivesdk"
		},
		{
			"code": "BS4Z",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Effects on Clay addition on properties of LDPE flexible films",
			"authors": "Julyana Galvão Santana;Marcus Vinicius Seixas;Mariana M. Arantes;Olgun Güven;Esperidiana A. B. Moura",
			"template": 0,
			"link": "https://drive.google.com/file/d/1dBKPOWQ9xUa8z4kZ4GBK8s1ZAqeCkG0n/view?usp=drivesdk"
		},
		{
			"code": "BRZK",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Nanostructures for heterogeneous photocatalysis",
			"authors": "Adriana Zaleska-Medynska;Pawel Mazierski;Anna Malankowska;Beata Bajorowicz;Magda Kozak;Wojciech Lisowski;Michal P. Winiarski;Tomasz Klimczuk;Grzegorz Nowacyzk;Marek Piotr Kobylanski",
			"template": 0,
			"link": "https://drive.google.com/file/d/1CZUq0tUZDj3-n_X1d42ufsc5Smv2GVQl/view?usp=drivesdk"
		},
		{
			"code": "BT6N",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Zein nanoparticles for pest control in sustainable agriculture: the encapsulation of citronella oil compounds",
			"authors": "Jhones Luiz de Oliveira;Estefania Vangelie Ramos Campos;Anderson Espirito Santo Pereira;Tatiane Pasquoto;Renata Lima;Leonardo Fernandes Fraceto",
			"template": 0,
			"link": "https://drive.google.com/file/d/1CYv5Z5-tGs7OTjA8m8Z-O8muvgXuq7Pw/view?usp=drivesdk"
		},
		{
			"code": "BTWV",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Synthesis of graphene by graphite oxidation using an improved Hummers method",
			"authors": "Monique Ribeiro D'oliveira;Jessica Rabelo do Nascimento;Martin Schmal;Carlos Alberto Chagas",
			"template": 0,
			"link": "https://drive.google.com/file/d/1CxgZjVmXJT_zH7OGFcjH2ULf3WWdNUlz/view?usp=drivesdk"
		},
		{
			"code": "BVDN",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Characterization and Photocatalytic Behavior of TiO2 Thin Films Grown by MOCVD Process",
			"authors": "Rodrigo Teixeira Bento;Eduardo Cesar de Oliveira;Margarida Szurkalo;Olandir Vercino Correa;Marina Fuser Pillis",
			"template": 0,
			"link": "https://drive.google.com/file/d/1cmUed6nRnxfEKtHY5THjus-zaXZcZzBO/view?usp=drivesdk"
		},
		{
			"code": "BTC6",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Evaluation of in vitro cytotoxicity of magnetic nanoparticles with potential to target colorectal cancer",
			"authors": "Thais da Silva Correa;Danilo Roberto Carvalho Ferreira;Amanda Elord Costa;Emília Celma de Oliveira Lima;Mariana Campos da Paz Lopes Galdino",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ClI-7fjSmDFM3WE7Pq1NnfSDDDcnK6g1/view?usp=drivesdk"
		},
		{
			"code": "BTK6",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Functionalization-induced changes in the carbon nanofiber structure via ionizing radiation using vinyl monomers",
			"authors": "Maria Cecilia Conceição Evora;Xinyi Lu;Nam-Goo Kang;Kunlun Hong;Roberto Uribe;Leonardo Gondim de Andrade Silva;Carla Lake;Jimmy Mays",
			"template": 0,
			"link": "https://drive.google.com/file/d/1cKa2lDT4rqycZir465MFVEF4lr3LtbZY/view?usp=drivesdk"
		},
		{
			"code": "BRYA",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "A triple functional approach to simultaneously determine type, concentration and size of titanium dioxide particles",
			"authors": "Bin Zhao;Lili He",
			"template": 0,
			"link": "https://drive.google.com/file/d/1CJyYZqJPSvILa7RL5FWq9AV6LTQRioPr/view?usp=drivesdk"
		},
		{
			"code": "BTCB",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Nanoarchitectures of Plentiful Materials for Solar Photocatalytic Fuel Generation",
			"authors": "Oomman K Varghese;Ram Neupane;Maggie Paulose",
			"template": 0,
			"link": "https://drive.google.com/file/d/1ci5tjZYcrxiuO3SmDFOzymTCWXS6Rd2a/view?usp=drivesdk"
		},
		/*{
			"code": "BVDP",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Synthesis and Characterization of TiO2 Films Obtained by Sol-Gel Method",
			"authors": "Margarida Szurkalo;Eduardo Cesar de Oliveira;Olandir Vercino Correa;Rodrigo Teixeira Bento;Marina Fuser Pillis",
			"template": 0,
			"link": "https://drive.google.com/file/d/1CHNhq7XMhBvfRZ8Ybm-Y3TTZWgIgPU-f/view?usp=drivesdk"
		},*/
		{
			"code": "BRYB",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Biodegradation and stability effect in PSU nanocomposites adding rGO nanosheets",
			"authors": "Janire Peña Bahamonde;Verónica San Miguel;Juan Carlos Cabanelas;Debora Frigi Rodrigues",
			"template": 0,
			"link": "https://drive.google.com/file/d/1CEio6ycjLLsRyYXhjsPYbyLQvmSK6yQ3/view?usp=drivesdk"
		},
		{
			"code": "BTAZ",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Poloxamer-cellulose derivatives thermosensitive hydrogels as delivery systems for the local anesthetic ropivacaine ",
			"authors": "Naially Cardoso de Faria;Samyr Machado Querobino;Eneida de Paula;Daniele Ribeiro de Araujo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1C4OJkWKMKrkQi1pwm2_Vhr5eJ7DGpRM4/view?usp=drivesdk"
		},
		{
			"code": "BTWT",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Palladium-copper supported on reduced graphene oxide: Simple synthesis and their application for NOx reduction",
			"authors": "Jessica Rabelo do Nascimento;Monique Ribeiro D'oliveira;Carlos Alberto Chagas;Martin Schmal",
			"template": 0,
			"link": "https://drive.google.com/file/d/1C3UcLNcuHKCp1x0PGbB2QBhT0zyhdZ0c/view?usp=drivesdk"
		},
		{
			"code": "BT6Y",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Antibacterial Synergistic Interaction of Silver Nanoparticles and Antibiotics",
			"authors": "Alejandro Huerta-Saquero;Roberto Vazquez-Muñoz;Pierrick Fournier;Rafael Vazquez;Nina Bogdanchikova",
			"template": 0,
			"link": "https://drive.google.com/file/d/1c-_Sevri7A83HhsDRF-IszEwSQs1eDvy/view?usp=drivesdk"
		},
		{
			"code": "BTCQ",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Study of combined light stabilizers systems (organics and nanoparticles) applied in polyethylene films",
			"authors": "Patricia Negrini Siqueira Poveda;Leonardo Gondim de Andrade Silva",
			"template": 0,
			"link": "https://drive.google.com/file/d/1B_f9QLp8sPlEAStD9LIp5C9UKV6G7TA5/view?usp=drivesdk"
		},
		{
			"code": "BTPH",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Intracellular responses triggered by solid lipid nanoparticles in PC-3 cells: activation of the TGF-ß pathway",
			"authors": "Fernanda Garcia Fóssa;Carolina de Guzzi Cassago;Marcelo Bispo de Jesus",
			"template": 0,
			"link": "https://drive.google.com/file/d/1BQNiZ2zY0f8wguMnCH0_ll-gfC8LrQcn/view?usp=drivesdk"
		},
		{
			"code": "BTDM",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Preparation of luminescent Nd2(MoO4)3 amino-functionalized silica nanoparticles for bioconjugation",
			"authors": "Maria Claudia França da Cunha Felinto;Clarissa Lombardi Dias;Leonardo H. C. Francisco;Everton Bonturim;Helliomar Pereira Barbosa;Hermi Felinto Brito;Oscar Loureiro Malta;Ercules Teotonio",
			"template": 0,
			"link": "https://drive.google.com/file/d/1bOBBBg8GFoW1UK4DUGiF4js0r95Y2uMC/view?usp=drivesdk"
		},
		{
			"code": "BSAC",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Synthesis of silver nanoparticles into reverse micelles with potential bactericidal activity over Staphylococcus aureus ATCC 9213",
			"authors": "Silvia Juliana Caballero;Claudia Cristina Ortiz;Jennifer Ruiz;Jorge Andres Gutierrez",
			"template": 0,
			"link": "https://drive.google.com/file/d/1biaCS1dMjl6Dnw4FJkp329VqZWey99Hl/view?usp=drivesdk"
		},
		{
			"code": "BTA6",
			"area": "Sustainability",
			"type": "ORAL",
			"title": "Nanotechnology Policy in Brazil: advances and challenges",
			"authors": "Noela Invernizzi;Guillermo Foladori;Josemari Quevedo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1BG33zS8CRG24-30QHa9lTobt33PXFTfN/view?usp=drivesdk"
		},
		{
			"code": "BTMX",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "In vivo uptake and speciation of Zn from ZnO nanoparticles in Phaseolus vulgaris plants",
			"authors": "Tatiana Nishida Máximo da Cruz;Susilaine Maira Savassa;Hudson W. P. de Carvalho",
			"template": 0,
			"link": "https://drive.google.com/file/d/1B9K2U6Go51OIhQ4yHQdDnASqDdOeSpkU/view?usp=drivesdk"
		},
		{
			"code": "BTKK",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "The study of chemical and physical properties of Polyaniline-Graphene Oxide and Palladium Polyaniline-Graphene Oxide composites",
			"authors": "Luiza Ferreira Sobrinho; Paula Tiemi Goto; Rafael H L Garcia; Daniel Francisco; Lúcio Angnes; Solange Kazumi Sakata",
			"template": 0,
			"link": "https://drive.google.com/file/d/1AyQrtbjQ0eHgMSlQo2v5Rr1A88Jmj1HB/view?usp=drivesdk"
		},
		{
			"code": "BTJK",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Use of Pseudoboehmite nanoparticles for drug release",
			"authors": "Antônio Hortêncio Munhoz Jr.;Alber Luiz do Nascimento;Mariana Oliva de Oliveira;Leila Figueiredo de Miranda;Denison Angelotti Moraes",
			"template": 0,
			"link": "https://drive.google.com/file/d/1awUtRXbjaqzNxsbiEK0fPundFaghQ2hu/view?usp=drivesdk"
		},
		{
			"code": "BRZZ",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "Effects of soluble copper and copper oxide nanoparticle exposure on the immune system of mussels",
			"authors": "Cristina del Carmen Torres Duarte;James D. Moore;Gary Neil Cherr",
			"template": 0,
			"link": "https://drive.google.com/file/d/1AJd3pXSB0qqphbXIOhate-vmoZ6njEBH/view?usp=drivesdk"
		},
		{
			"code": "BSEQ",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Gold nanoparticles coatings for nanobrachytherapy application ",
			"authors": "Andreza A. D. C. C. Gonzalez;Maria Elisa Chuery Martins Rostelato;Carla Daruich Souza;Beatriz Ribeiro Nogueira",
			"template": 0,
			"link": "https://drive.google.com/file/d/1agmSUGC2p2TzjHBawYHYJx38XTY9Ro8m/view?usp=drivesdk"
		},
		{
			"code": "BTAB",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Biosynthesis and characterization of silver nanoparticles using green tea extract",
			"authors": "Wallace Rosado Rolim;Amedea Barozzi Seabra",
			"template": 0,
			"link": "https://drive.google.com/file/d/1aDZKmyDW4Kvu-ZivqGrrIPl9ifTHhZzD/view?usp=drivesdk"
		},
		{
			"code": "BT6Z",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Iron oxide ferromagnetic nanoparticles functionalized with mPEG-CN and L-Lysine bind efficiently to cells in vitro. ",
			"authors": "Letícia Bonfim;Karina de Oliveira Gonçalves;Lilia Coronato Courrol;Daniel Perez Vieira",
			"template": 0,
			"link": "https://drive.google.com/file/d/1abMNNch3E4NPXmFv3xgZD5zNK3TqADHk/view?usp=drivesdk"
		},
		{
			"code": "BV4E",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Incorporation of tetracycline in bentonite aiming it use as drug carrier",
			"authors": "Margarita Bobadilla Gaviria;Maria das Graças da Silva Valenzuela;Francisco Rolando Valenzuela Diaz",
			"template": 0,
			"link": "https://drive.google.com/file/d/1A5UZLPe0fM0aFVOi7t77hAd1yTm4tr7s/view?usp=drivesdk"
		},
		{
			"code": "BSPK",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Electron beam irradiationof reduced graphene oxide-palladium nanocomposite for electrochemical supercapacitor",
			"authors": "Gabriel S. Galdino;Luiza Ferreira Sobrinho;Pedro Vitor Cruz;Julio C. S. Casini;Solange Kazumi Sakata;Rubens Nunes Faria Jr.",
			"template": 0,
			"link": "https://drive.google.com/file/d/19qB-ed2qzfkzbO-KT78R_qGvPeFlSXgr/view?usp=drivesdk"
		},
		{
			"code": "BTPM",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Photonic and Magnetic Nanoparticles and Nanoscale",
			"authors": "T. Randall Lee",
			"template": 0,
			"link": "https://drive.google.com/file/d/18yLq2j5wAp1YfcewfFBZiUjr3rfk-J_R/view?usp=drivesdk"
		},
		{
			"code": "BTBG",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Evaluation  Cytotoxicity Photodynamic Therapy Mediated by Nanoemulsion of Açai Oil Against Non Melanoma Skin Cancer",
			"authors": "Khellida Loiane Vieira Ramos Rocha;Claudio Eduardo Cavalcanti;Ricardo Bentes de Azevedo",
			"template": 0,
			"link": "https://drive.google.com/file/d/18v-HCRdAKuLNXmwBOTHumfK7vjtbYa2F/view?usp=drivesdk"
		},
		{
			"code": "BTAH",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Characterization of iron oxide nanoparticles with chitosan and ascorbic acid obtained by the co-precipitation method.",
			"authors": "Isabella M. Lourenço;Milena Trevisan Pelegrino;Isabelle de Souza Campos;Paula S. Haddad;Fanny Nascimento Costa;Amedea Barozzi Seabra",
			"template": 0,
			"link": "https://drive.google.com/file/d/18tItXJn38dLd3fEv-D_4EWl7rn6KWJ-R/view?usp=drivesdk"
		},
		{
			"code": "BTCW",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Different toxic effects on zebrafish embryos after co-exposure to graphene oxide and humic acid: the influence of corium barrier",
			"authors": "Aline Maria Zigiotto de Medeiros;Gabriela Helena da Silva;Diego Stefani Teodoro Martinez;Vera Lúcia Scherholz Salgado Castro;Regina Teresa Rosim Monteiro",
			"template": 0,
			"link": "https://drive.google.com/file/d/18KZ8YnYmmTydoothq-una8VckjaLbBb4/view?usp=drivesdk"
		},
		{
			"code": "BTCH",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "TL and OSL properties of artificial nanocrystals of quartz polymorph obtained via sol-gel and its applicability to environmental ionizing radiation dosimetry ",
			"authors": "Diego Renan Giglioti Tudela;Sonia H. Tatumi",
			"template": 0,
			"link": "https://drive.google.com/file/d/187HNDuLGQ_RmbRgoY3rLb9-ARSNViwYp/view?usp=drivesdk"
		},
		{
			"code": "BRRA",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Formation of heterogeneous protein-humic surface coatings on metal oxide nanoparticles",
			"authors": "Stacey M Louie;Sheyda Shakiba",
			"template": 0,
			"link": "https://drive.google.com/file/d/17xZN2h3rTVBhRhZ1PF7uIEXzKXUDiJBd/view?usp=drivesdk"
		},
		{
			"code": "BRJM",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Combined metal nanoparticles-functionalized membrane technology for toxic organic degradation",
			"authors": "Hongyi Wan; Nicolas Briot; Anthony Saad; Lindell Ormsbee;Dibakar Bhattacharyya",
			"template": 0,
			"link": "https://drive.google.com/file/d/17X055cX1w8H4_EDT4OH4r5vekLdn_IWl/view?usp=drivesdk"
		},
		{
			"code": "BTBE",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Antitumoral evaluation of photodynamic therapy mediated by Selol nanocapsules and by nanoemulsion  Phthalocyanine against breast cancer",
			"authors": "Khellida Loiane Vieira Ramos Rocha;Graziella A. Joanitti;Alicia Ombredane;Ricardo Bentes de Azevedo",
			"template": 0,
			"link": "https://drive.google.com/file/d/17QNP10x8_xOvVBhbkxQ63KDvznR6QrAu/view?usp=drivesdk"
		},
		{
			"code": "BTKM",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Processing of Magnesium and Titanium-based Nanomaterials for Hydrogen Storage",
			"authors": "Daniel Rodrigo Leiva;Ricardo Floriano;Guilherme Zepon;Ricardo Mendes Leal Neto;Tomaz Toshimi Ishikawa;Walter José Botta",
			"template": 0,
			"link": "https://drive.google.com/file/d/17OnThyf-SZc40DJqZumEve4-vDzjc1j2/view?usp=drivesdk"
		},
		{
			"code": "BS6T",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Iron Nanoparticle Impregnated Carbon Nanohybrids Prepared with Ultrasonic Spray Pyrolysis for Cr (VI) Removal",
			"authors": "Arvid Masud;John D Atkinson;Nirupam Aich",
			"template": 0,
			"link": "https://drive.google.com/file/d/17l9PTQn2MQbIJc2cxXeDANCmTYSnYgJh/view?usp=drivesdk"
		},
		{
			"code": "BRZ2",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "Effect of growing conditions on the adaptation of bacteria cultures to nanoparticles exposure",
			"authors": "Vinka Craver",
			"template": 0,
			"link": "https://drive.google.com/file/d/17Hv1dxA22Ir60zTXElAvucLd6Vi_L3T5/view?usp=drivesdk"
		},
		{
			"code": "BS6V",
			"area": "Ecological-nano interactions",
			"type": "POSTER",
			"title": "Perovskite-type KNbO3 modified with quantum dots and graphene for heterogeneous photocatalysis",
			"authors": "Beata Bajorowicz;Joanna Nadolna;Adriana Zaleska-Medynska",
			"template": 0,
			"link": "https://drive.google.com/file/d/179sBB-adUpzgpAcjVk0E2nHyBgxGuM6i/view?usp=drivesdk"
		},
		{
			"code": "BSGG",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Barley-Engineered Nanoparticle-Phytopathogen Interactions: Induced Physiological Reprogramming of Innate Immunity",
			"authors": "Priyanka Deka;Roshan Sharma Poudel;Shyam Solanki;Chrysafis Voriatzis;Achintya N Bezbaruah;Robert S Brueggeman",
			"template": 0,
			"link": "https://drive.google.com/file/d/16zT-ATXPq-_ft_hUWw_7V3akhR4H7SUG/view?usp=drivesdk"
		},
		{
			"code": "BVEC",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Multifunctionalized nanoparticles for biomedical applications",
			"authors": "Koiti Araki",
			"template": 0,
			"link": "https://drive.google.com/file/d/16sK6TUTrlxUzRfKSWFrTgWQU_tpkmpWy/view?usp=drivesdk"
		},
		{
			"code": "BRYM",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Morphology of nanostructured thin films of ZnO fabricate from SILAR method  ",
			"authors": "Eguiberto Galego;Marilene Morelli Serna;Lalgudi Venkataraman Ramanathan;Rubens Nunes Faria Jr.",
			"template": 0,
			"link": "https://drive.google.com/file/d/16Pqe14PqYfBKzdF5on1sAoZYftzAxAZa/view?usp=drivesdk"
		},
		{
			"code": "BTBQ",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Synthesis, characterization and biological application of photosensitizer loaded magnetic nanoemulsion",
			"authors": "Karen Rapp Py-Daniel;Sergio Enrique Moya;Ricardo Bentes de Azevedo",
			"template": 0,
			"link": "https://drive.google.com/file/d/16DvqFfS847Ty4FEso828eOg2dGkZ2MmA/view?usp=drivesdk"
		},
		{
			"code": "BTCJ",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Nanostructured Lipid Carriers: Evaluation of flavonoid activity against skin cancer",
			"authors": "Amanda Ferreira Costa;Danijela Stanisic;Renata Saito;Ljubica Tasic;Nelson Durán;Roger Chammas;Paula Aragão Lima;Marcelo Alexandre de Farias;Juliana da Silva Bernardes;Rodrigo Villares Portugal",
			"template": 0,
			"link": "https://drive.google.com/file/d/1577h7gwMn1QckIcspNKNb17TVk9S694E/view?usp=drivesdk"
		},
		{
			"code": "BTXN",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Photoreduction of cytochrome c by nanostructured zinc oxide and hematite using simulated sunlight.",
			"authors": "Lucivaldo dos Reis Menezes;Fernanda Yumi Suenaga;Juliana Casares Araujo-Chaves;Iseli Lourenço Nantes-Cardoso",
			"template": 0,
			"link": "https://drive.google.com/file/d/14G56czoIDVksD8hvpzQIzaV3NkkMoW5B/view?usp=drivesdk"
		},
		{
			"code": "BSDY",
			"area": "Sustainability",
			"type": "ORAL",
			"title": "Nanoenabled textiles: a life cycle case study in environmental benefits and costs ",
			"authors": "Andrea Hicks",
			"template": 0,
			"link": "https://drive.google.com/file/d/148rkzhybR1XNZTvgQv7Y9ztolmvwQVAx/view?usp=drivesdk"
		},
		{
			"code": "BRXR",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Biosynthesis of copper nanoparticle by bacterium isolated from copper mine ",
			"authors": "Louise Hase Gracioso;Claudio Augusto Oller do Nascimento;Elen Aquino Perpetuo;Debora Frigi Rodrigues",
			"template": 0,
			"link": "https://drive.google.com/file/d/1423e4QTDXnMaksqw8v_UGgrrhBl6NcVS/view?usp=drivesdk"
		},
		{
			"code": "BS6E",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Bioactive acrylic bone cements nanocomposites modified with graphene oxide and chitosan",
			"authors": "Mayra Eliana Valencia Zapata;Jose Herminsul Mina;Hector Fabio Zuluaga;Carlos David Grande Tovar;Blanca Vázquez Lasa;Julio San Roman;Luis Rojo",
			"template": 0,
			"link": "https://drive.google.com/file/d/140ceqh1SngoP7DNmdM4fK4nUhE5p4gIy/view?usp=drivesdk"
		},
		{
			"code": "BS2F",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Atrazine removal from contaminated waters with zero-valent copper particles",
			"authors": "Luana Rabelo Hollanda;Cátia Alexandra Graça;Osvaldo Chiavone-Filho;Antonio Carlos Silva Costa Teixeira",
			"template": 0,
			"link": "https://drive.google.com/file/d/13yarEFQ4vby_XZccUzoISaW3LisJZGPj/view?usp=drivesdk"
		},
		{
			"code": "BSAT",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "In-situ study of cellular discharge in S. aureus during photocatalytic inactivation",
			"authors": "Jing-Hua Tzeng",
			"template": 0,
			"link": "https://drive.google.com/file/d/13uyIpvqOZN2z39xIVQcFQlYQMI0IwzGq/view?usp=drivesdk"
		},
		{
			"code": "BTDF",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Characterization by atomic force microscope (AFM) of graphene oxide and graphene oxide-PEGNH2 incorporated in bovine pericardium ",
			"authors": "Jaqueline Jamara Souza Soares;Carlos Alberto Costa;Raynara Maria Silva Jacovone;Marcio Henrique Zaim;Solange Kazumi Sakata",
			"template": 0,
			"link": "https://drive.google.com/file/d/13Mwj6LzLo8Z9VzX31lMOlfwaad087u1u/view?usp=drivesdk"
		},
		/*{
			"code": "BTP4",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Hardwired for success: Ni supported CeO2:Sm2O3 nanowires as a super stable catalyst for ethanol steam reforming",
			"authors": "Thenner Silva Rodrigues;Arthur Brucoli Leme de Moura;Felipe A. e Silva;Eduardo G. Candido",
			"template": 0,
			"link": "https://drive.google.com/file/d/13mhHrtYbUvi4-OXeRFyedWyjupUVmVIB/view?usp=drivesdk"
		},*/
		{
			"code": "BS6C",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Reverse micelles as nanoreactors applied to controled synthesis of gold nanoparticles with antimicrobial activity",
			"authors": "María Alejandra Guerrero;Claudia Cristina Ortiz;John Jairo Castillo;Jennifer Ruiz;Jorge Andres Gutierrez",
			"template": 0,
			"link": "https://drive.google.com/file/d/13atX5UJKYvW9jW7Qqs8B-iVn-FvXuqaq/view?usp=drivesdk"
		},
		{
			"code": "BVFS",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "PEGylation of Carbon Nanotubes for Biomedical Applications",
			"authors": "Gisele Eva Bruch;Felipe Antonio Girardi;Lidiane Dal Bosco;Carla Onara Gonçalves;Clascídia A. Furtado;Cristiano Fantini;Adelina Pinheiro Santos;Daniela Martí Barros",
			"link": "https://drive.google.com/file/d/1R27irh9iSoFLOPWGL_tYgDcHPg7BXK2h/view"
		},
		{
			"code": "BVF2",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Adsorption and Desorption of chlorhexidine on Montmorillonite Nanoparticles",
			"authors": "Tamiris Martins Ribeiro dos Santos;Luiza Mello de Paiva Campos;Mariana de Jesus Santos;Duclerc Fernandes Parra",
			"template": 0,
			"link": "https://drive.google.com/file/d/12Vt7E5aWNrOf3U316VGPu0aIWNty0xKY/view?usp=drivesdk"
		},
		{
			"code": "BTHQ",
			"area": "Sustainability",
			"type": "ORAL",
			"title": "Nanotechnology and botanical insecticides towards a sustainable agriculture",
			"authors": "Leonardo Fernandes Fraceto",
			"template": 0,
			"link": "https://drive.google.com/file/d/12VgqP0OrW_6L3PxLLBaWfoODXw8y5jut/view?usp=drivesdk"
		},
		{
			"code": "BVDK",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Neurotoxicity induced by administration of mesoporous silica nanoparticles as neuropharmacological carriers.",
			"authors": "Daiane Guedes Domingues;Antoninho Teixeira Júnior;Alexandre Ehrhardt",
			"template": 0,
			"link": "https://drive.google.com/file/d/12qz4uG91Uha03qUweBwna7uG0-w974_6/view?usp=drivesdk"
		},
		{
			"code": "BSPC",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Finite Size Effects – A Guiding Principle for Monolayer Catalysts Synthesis and Design",
			"authors": "Stanko Brankovic",
			"template": 0,
			"link": "https://drive.google.com/file/d/12OdyU2kRbIMxXzfPlfdQyZjb9mdNvLGf/view?usp=drivesdk"
		},
		{
			"code": "BSPG",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Thermal reduction of graphene oxide nanocomposite using a low temperature HDDR process for supercapacitors",
			"authors": "Fernando Gabriel Benitez Jara;Pedro Vitor Cruz;Gabriel S. Galdino;Julio C. S. Casini;Solange Kazumi Sakata;Rubens Nunes Faria Jr.",
			"template": 0,
			"link": "https://drive.google.com/file/d/12jMlpLNLQlOvX19RWEVdIHzKQmFClUvz/view?usp=drivesdk"
		},
		{
			"code": "BNQW",
			"area": "Ecological-nano interactions",
			"type": "ORAL",
			"title": "Nanotechnology based sustainable and precision agriculture: A systematic understanding of nanoparticle synthesis and its interaction with plants",
			"authors": "Ramesh Raliya;Pratim Biswas",
			"template": 0,
			"link": "https://drive.google.com/file/d/11fKSUolt3Mcpc_yblcV9PaJavCBfOedR/view?usp=drivesdk"
		},
		{
			"code": "BTDE",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "The effect of GO-PEGNH2 on the mechanical resistance of bovine pericardium used in cardiovascular ",
			"authors": "Jaqueline Jamara Souza Soares;Raynara Maria Silva Jacovone;Monica Beatriz Mathor;Marcio Henrique Zaim;Marina Junko Shiotsu Maizato;Solange Kazumi Sakata;Idágene Aparecida Cestari;Fábio Biscegli Jatene",
			"template": 0,
			"link": "https://drive.google.com/file/d/11cknd_MvAF94vW51iGqzXXniGa2HPG2R/view?usp=drivesdk"
		},
		{
			"code": "BTTM",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "In Vivo Comparison of Zinc Foliar Absorption Applied as Sulphate and Oxide in Soybean",
			"authors": "Marcos Henrique Feresin Gomes;Eduardo de Almeida;Rafael Otto;Hudson W. P. de Carvalho",
			"template": 0,
			"link": "https://drive.google.com/file/d/10QazpCfNcY8meaq5VtALkIWWfyU7lzpa/view?usp=drivesdk"
		},
		{
			"code": "BVE6",
			"area": "Sustainability",
			"type": "ORAL",
			"title": "Non-metallic conductive inks, paints, and adhesives for making flexible circuitry supported on paper or cloth",
			"authors": "Fernando Galembeck;Bruno C Batista;Ramon dos Santos;Pompeu Abreu-Filho;Jeferson Santos;Elisa Ferreira",
			"template": 0,
			"link": "https://drive.google.com/file/d/10-jqurEeDtac_FfksV0UFfzQ8z-NDA0b/view?usp=drivesdk"
		},
		{
			"code": "BS4Y",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Preparation and Characterization of Nanocellulose from Sugarcane bagasse ",
			"authors": "Marcus Vinicius Seixas;Esperidiana A. B. Moura;Vijaya K. Rangari;Hélio Wiebeck",
			"template": 0,
			"link": "https://drive.google.com/file/d/1-XHWWvyFK2g9nITkY9C30EGdRykPfONs/view?usp=drivesdk"
		},
		{
			"code": "BSAZ",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "CO2 facilitated transport through membranes containing amino-functionalized inorganic particles",
			"authors": "Raquel Greice Alfaya;Alberto Claudio Habert;Helen Conceição Ferraz",
			"template": 0,
			"link": "https://drive.google.com/file/d/1-qLPGP1J6O-ThM_7qMbnqZXPwxjWzZ6G/view?usp=drivesdk"
		},
		{
			"code": "BS6K",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Biodegradation of graphene oxide-polymer nanocomposite films in water",
			"authors": "Carlos David Grande Tovar;Jingjing Fan;Debora Frigi Rodrigues",
			"template": 0,
			"link": "https://drive.google.com/file/d/1-JMWVFhwrxvvzCGFxZAWuHwrvY5exVne/view?usp=drivesdk"
		},
		{
			"code": "BRTF",
			"area": "Sustainability",
			"type": "POSTER",
			"title": "Silver nanoparticle removal from spinach leaves using a combination of sodium hypochlorite and ammonium hydroxide ",
			"authors": "Zhiyun Zhang;Lili He",
			"template": 0,
			"link": "https://drive.google.com/file/d/1-Ixql-WRx__fXdGzpkUqR-6iIw3gR5nV/view?usp=drivesdk"
		},
		{
			"code": "BVDY",
			"area": "Nanomanufacturing",
			"type": "ORAL",
			"title": "Obtaining of Nanochitosan by Physical Process",
			"authors": "Luciana de Souza Neves Ellendersen;Helton José Alves;Mabel K. Arantes;Graciela Ines Bolzon Muñiz",
			"template": 0,
			"link": "https://drive.google.com/file/d/1-acICyOesUOW9pIn0iX78dOGXp287Gt7/view?usp=drivesdk"
		},
		{
			"code": "BTB2",
			"area": "Chemical-nano interactions",
			"type": "ORAL",
			"title": "Development of multifunctional nanocomposite coating for indirect potable reuse water treatment",
			"authors": "Pasan Chinthana Bandara;Debora Frigi Rodrigues;Enrico Nadres",
			"template": 0,
			"link": "https://drive.google.com/file/d/1-5KObruyixPnkFhzAnHVn4Ggu8HKcrt1/view?usp=drivesdk"
		},
		{
			"code": "BT6J",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Adsorption study of acid orange 8 dye using silica nanoparticles obtained from sugarcane ash",
			"authors": "Suzimara Rovani;Jonnatan Julival Santos;Paola Corio;Denise Fungaro",
			"template": 0,
			"link": "https://drive.google.com/file/d/1-0oTCBDGxruSSj5QBtKzMre7pDioeZk0/view?usp=drivesdk"
		},
		{
			"code": "BARB",
			"area": "Biological-nano Interactions",
			"type": "ORAL",
			"title": "Nanotechnology: Implications, Applications, Sustainability",
			"authors": "Barbara Karn",
			"template": 0,
			"link": null
		},
		{
			"code": "BRTY",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Decomposition of Perfluorooctane Sulfonate by Nanoscale Zerovalent Iron Associated with Persulfate/Hydrogen Peroxide",
			"authors": "Naomi Gevaerd de Souza;Akshay Chandrashekan Parenky;Hyeok Choi",
			"template": 0,
			"link": null
		},
		{
			"code": "BTDC",
			"area": "Sustainability",
			"type": "POSTER",
			"title": "Recycling of plastic cups and packaging of EPS to obtain nanocomposite with nanoclay and plaster",
			"authors": "Suellen Signer Bartolomei;Messias dos Santos Machado;Julyana Galvão Santana;Esperidiana A. B. Moura;Hélio Wiebeck",
			"template": 0,
			"link": "https://drive.google.com/file/d/1yLfct6T2etMh_wtk6do3lgC-DNGm2Z7f/view"
		},
		{
			"code": "BVBH",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Poly(beta-amino) ester physicochemical properties determine the transfection efficiency in ARPE-19 cell line",
			"authors": "Guilherme Capiraço Campese;Bruna Beatriz Soldera;Marcelo Bispo de Jesus",
			"template": 0,
			"link": "https://drive.google.com/file/d/1OoLkMM2VyZ1uce-bdroImKOtRmIqY0Ul/view"
		},
		{
			"code": "BVDQ",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Morphological characterization of N-doped TiO2 thin films",
			"authors": "Eduardo Cesar de Oliveira;Rodrigo Teixeira Bento;Olandir Vercino Correa;Marina Fuser Pillis;Margarida Szurkalo",
			"template": 0,
			"link": ""
		},
		{
			"code": "BS22",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Biodegradable polymer blends reinforced with bio-hydroxyapatite nanoparticle - preparation and characterization",
			"authors": "Pedro Rodrigo Reis;Julyana Galvão Santana;Rene R. Oliveira;Vijaya K. Rangari;Esperidiana A. B. Moura",
			"template": 0,
			"link": "https://drive.google.com/file/d/1EnRj9iv_pPk1RgChD_chqNwEY2zeBlzc/view"
		},
		{
			"code": "BT6P",
			"area": "Education",
			"type": "POSTER",
			"title": "Environmental nanotechnology and graduate students: a theoretical–practical approach to study the potential impacts of nanomaterials on human health and the environment",
			"authors": "Nathalie Ferreira Silva de Melo;Leonardo Fernandes Fraceto;Renato Grillo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1OcAF__90nZLfuQ1Wsw3HrxgLriaHltNr/view"
		},
		{
			"code": "BT6R",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Poloxamer hydrogel containing polymeric nanocapsules: an in vitro skin-membrane permeation study",
			"authors": "Renato Grillo;Fabiana Vieira Dias;Samyr Machado Querobino;Carlos Alberto-Silva;Leonardo Fernandes Fraceto;Eneida de Paula;Daniele Ribeiro de Araujo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1qpm9puqWEr2jRunjpdCozwkH2FGvYt2t/view"
		},
		{
			"code": "BTKJ",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "Gamma radiation assisted reduction of graphene oxide in unoxidized environment",
			"authors": "Tiago dos Santos Moura;Paula Tiemi Goto;Rafael H L Garcia;Pablo Antonio Vázquez Salvador;Paulo de Souza Santos;Jaqueline Jamara Souza Soares;Lucia Kiyomi Noda;Solange Kazumi Sakata",
			"template": 0,
			"link": "https://drive.google.com/file/d/1Y8zsDrkcQAazLNikJx_ZRyyiaaoCHO9G/view"
		},
		{
			"code": "BRHT",
			"area": "Ecological-nano interactions",
			"type": "POSTER",
			"title": "Antibacterial mechanism of ZnO nanoparticles on Escherichia coli: Toxic effect of ZnO nanoparticles in commercial sunscreens",
			"authors": "Soyoung Baek;SungHee Joo",
			"template": 0,
			"link": "https://drive.google.com/file/d/1QQfXuDm3G1Zj6ZT4X_XO78GOkVe_l_XY/view"
		},
		{
			"code": "BTAP",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Para Nanostructured surface for absorption of the environmental electromagnetic noise",
			"authors": "Samuel Machado Leal da Silva;Carlos Luiz Ferreira;Newton Adriano dos Santos Gomes",
			"template": 0,
			"link": "https://drive.google.com/file/d/1z1qkZW-zHDefrRbnNORshcr5cPCkB-iQ/view"
		},
		{
			"code": "BTCA",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Formulation, characterization and cytotoxicity of açaí oil (Euterpe oleracea Mart) nanoemulsion on breast cancer cells in vitro",
			"authors": "Thamara Rodrigues Alexandre;Victor Hugo Sousa Araujo;Ricardo Bentes de Azevedo;Graziella A. Joanitti",
			"template": 0,
			"link": "https://drive.google.com/file/d/1GrWVftiU2JHR3u1nA0vKDqe4IziCBLS6/view"
		},
		{
			"code": "BSBF",
			"area": "Nanomanufacturing",
			"type": "POSTER",
			"title": "New Gold nanoparticle synthesis",
			"authors": "Carla Daruich Souza;Maria Elisa Chuery Martins Rostelato;Andreza A. D. C. C. Gonzalez;Beatriz Ribeiro Nogueira;Marc-André Fortin;Pascale Chevallier",
			"template": 0,
			"link": "https://drive.google.com/file/d/1n9TBAQjM3g_VSNfVz_Vv6ICW3Em0VAKR/view"
		},
		{
			"code": "BRXS",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Removal of Dyes from Wastewater by Magnetic Nanohybrids",
			"authors": "Helena Augusta Lisboa de Oliveira;Alex Fabiano Cortez Campos;Renata Aquino;Jerome Depeyrot",
			"template": 0,
			"link": ""
		},
		{
			"code": "BS2Y",
			"area": "Chemical-nano interactions",
			"type": "POSTER",
			"title": "Hydrophilic and kinetic properties of nanoclay laponite rds and poly (methacrylic acid) (PMAA) hydrogel nanocomposites",
			"authors": "Carlos Roberto Ferreira Junior;Marcia Regina de Moura;Fauze Ahmad Aouada",
			"template": 0,
			"link": "https://drive.google.com/file/d/1WBSWaMUBSPxYbuoKFGZQDrvQaHlqFbLt/view"
		},
		{
			"code": "HIGH",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Highly Crystalline Zinc Oxide Nanoparticles for Photodegradation of Acetaminophen in a Micro-packed Bed Reactor",
			"authors": "Fabiane J. Trindade;Bruno Ramos;Sergio Brochsztain;Eduardo R. Triboni;Tayro Stringari;Ardson S. Vianna Junior;Antonio Carlos Silva Costa Teixeira",
			"template": 0,
			"link": "https://drive.google.com/file/d/1QEObB0ndJ4AL38ccNNr1qX1BpZTB3gie/view"
		},
		{
			"code": "ASSO",
			"area": "Biological-nano Interactions",
			"type": "POSTER",
			"title": "Association of Botanical Compounds from Different Plants with Nanotechnology as a Promising System Aiming Pest Control",
			"authors": "Jhones Luiz de Oliveira;Estefania Vangelie Ramos Campos;Tais Germano da Costa;Renata Lima;Jaqueline Franciosi Della Vechia;Sidneia Terezinha Soares;Daniel Junior de Andrade;Kelly Cristina Gonçalves;Ricardo Antonio Polanczyk;Leonardo Fernandes Fraceto",
			"template": 0,
			"link": "https://drive.google.com/file/d/1P-KpgCrwS3wWkdje0YR1p2O6LSTlJjeY/view"
		}
	];

    return {
        init:init,
        getByArea:getByArea,
        getByAuthor:getByAuthor,
		getByTitle:getByTitle,
		getByPaper:getByPaper,
        getPaper:getPaper
    };

})();
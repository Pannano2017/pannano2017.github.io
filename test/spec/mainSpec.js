describe("Main Spec", function(){
    
    var spyData, spyList, spyFilter, spyModal;

    beforeEach(function(){
        $("<div id='fixtures'></div>").appendTo("body");
        spyData = spyOn(data, "init");
        spyList = spyOn(list, "init");
        spyFilter = spyOn(filter, "init");
        spyModal = spyOn(modal, "init").and.callThrough();
        $("#fixtures").append("<div id='splash'></div>"+
        "<div id='modal' class='modal'></modal>"+
        "<main>"+
            "<div class='list-group'></div>"+
            "<div class='list-group'></div>"+
            "<div class='list-group'></div>"+
        "</main>");
        main.init();
    });

    afterEach(function(){
        $("#fixtures").empty().remove();
    });

    describe("Ao entrar: ", function(){

        it("deve processar os dados de entrada.", function(){
            expect(spyData).toHaveBeenCalled();
        });

        it("deve encontrar as listas filtráveis e iniciar elas.", function(){
            expect(spyList).toHaveBeenCalled();
        });

        it("deve encontrar os filtros de listas e iniciar eles.", function(){
            expect(spyFilter).toHaveBeenCalled();
        });

        it("deve encontrar o modal e inicializar ele (deixando escondido", function(){
            expect(spyModal).toHaveBeenCalled();
        });

        it("deve remover o splash e mostrar o conteúdo após processamento acabar.", function(){
            expect($("#splash").length).toBe(0);
            expect($("main.loaded").length).toBe(1);
        });

    });

});
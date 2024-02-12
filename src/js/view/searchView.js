class SearchView {
    _searchBtn=document.querySelector('.search');
   
    getQuery(){
        const query= this._searchBtn.querySelector('.search__field').value;
        this._clear();
        return query;
    }
    _clear(){
        this._searchBtn.querySelector('.search__field').value='';    }
    addEventHandler(handler){
        this._searchBtn.addEventListener('submit',function(e){
            e.preventDefault();
            handler();
        })
    }

}
export default new SearchView();
exports.createAddress = function (content) {
    if (content.cep == undefined) {
        throw "First param 'zipcode' should not be undefined."
    }

    var _cep = content.cep
    var _logradouro = content.logradouro
    var _complemento = content.complemento
    var _bairro = content.bairro
    var _localidade = content.localidade
    var _uf = content.uf
    var _ibge = content.ibge
    var _gia = content.gia
    var _uf = content.uf
    var _ddd = content.ddd
    var _siafi = content.siafi

    return {
        getCep() {
            return _cep
        },
        getLogradouro() {
            return _logradouro
        },
        getComplemento() {
            return _complemento
        },
        getBairro() {
            return _bairro
        },
    }
}
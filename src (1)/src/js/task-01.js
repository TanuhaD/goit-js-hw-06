let data = []
$('.item').each(function() {
    data.push({
        h2: $(this).find('h2').html(),
        li_length: $(this).find('li').length
    })
})

console.table(data);
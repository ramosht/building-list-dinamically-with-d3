const data = [
	{
		'name':'Guilherme',
		'age':'21',
		'sector':'Development',
		'company':'Despachante DOK'
	},
	{
		'name':'Adilson',
		'age':'21',
		'sector':'Development',
		'company':'Despachante DOK'
	},
	{
		'name':'Bruno',
		'age':'30',
		'sector':'Graphic Design',
		'company':'Despachante DOK'
	},
	{
		'name':'Elion',
		'age':'19',
		'sector':'Audiovisual',
		'company':'Despachante DOK'
	}
];

// Insert an <li> inside of .users with the class .user
let usersNode = d3.select(".users")
					.selectAll("li")
					.data(data)
					.enter()
					.append("li")	
					.attr('class','user')

createNode('span', 'user-info user-name', 'Name: ', 'name');
createNode('span', 'user-info user-age', 'Age: ', 'age');
createNode('span', 'user-info user-company', 'Company: ', 'company');
createNode('span', 'user-info user-sector', 'Sector: ', 'sector');

// this function calls the code stored in usersNode and insert something inside of .user
function createNode(tag, classes, label, attribute) {
	usersNode.append(tag)
				.attr('class', classes)
				.text(d => label + d[attribute]);
}
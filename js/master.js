(() => {

	// what do we want to work
	// 
	// this is a 1 to 1 connection


	var badge = document.querySelector('#badge');

	var allTheBadge = document.querySelectorAll('.isabadge')

		function logMyId()
		{
			// log some stuff to dev tools
			console.log(this.id)
			debugger;
		}

		// how do we want to so that?
		// 1 to 1 event handling
		badge.addEventListener("click", logMyId)

		allTheBadge.forEach(currentbadge => currentbadge.
			addEventListener('click', logMyId))

	})()
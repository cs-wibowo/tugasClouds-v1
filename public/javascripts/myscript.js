// JavaScript Document

		$(document).ready(function() {
			$('#list').fadeIn('slow');
			
			$('#create').click(function() {
				$('#fID').val('');
				$('#fName').val('');
				$('#fDepartment').val('');
				$('#fSalary').val('');
				
				$('#save').text("Save");
				$('#selectedID').val("");
				$('#content').text("Create new employee's data");
				openForm();
			});
			
			$('.edit').click(function() {
				/*$('#fID').val($('#id'+ $(this).attr('id')).text());
				$('#fName').val($('#name'+ $(this).attr('id')).text());
				$('#fDepartment').val($('#department'+ $(this).attr('id')).text());
				$('#fSalary').val($('#salary'+ $(this).attr('id')).text());
				openForm();*/
				editItem($(this).attr('id'))
			});
			$('.delete').click(function() {
				/*var dlt=confirm("Hapus employee : "+$('#name'+ $(this).attr('id')).text());
				if (dlt==true){
					$('#row'+$(this).attr('id')).remove();
				}*/
				removeItem($(this).attr('id'));
			});
			
			$('#save').click(function() {
				
				if($(this).text()=="Save"){
					var j = parseInt($('#grid').attr('jumlah'))+1; $('#grid').attr('jumlah',j);
					$('#grid').append("<tr id='row"+j+"'><td id='id"+j+"'  align='center'>"+$('#fID').val()+"</td><td id='name"+j+"'>"+$('#fName').val()+"</td><td id='department"+j+"'  align='center'>"+$('#fDepartment').val()+"</td><td id='salary"+j+"'  align='right'>"+$('#fSalary').val()+"</td> <td align='center'><span id='"+j+"' class='edit span-btn' onclick=\"editItem(this.getAttribute('id'))\">Edit</span><span id='"+j+"' class='delete span-btn' onclick=\"removeItem(this.getAttribute('id'))\">Remove</span></td></tr>");
				} else {
					$('#id'+ $('#selectedID').val()).text($('#fID').val());
					$('#name'+ $('#selectedID').val()).text($('#fName').val());
					$('#department'+ $('#selectedID').val()).text($('#fDepartment').val());
					$('#salary'+ $('#selectedID').val()).text($('#fSalary').val());
				}
				
				closeForm();
				
			});
			$('#cancel').click(function() {closeForm();});
			
			
		});
		
		function openForm() {$('#list').hide(); $('#form').fadeIn('slow');};
		function closeForm() {$('#form').hide(); $('#list').fadeIn('slow');};
		
		function editItem(own) {
			$('#fID').val($('#id'+ own).text());
			$('#fName').val($('#name'+ own).text());
			$('#fDepartment').val($('#department'+ own).text());
			$('#fSalary').val($('#salary'+ own).text());
			
			$('#save').text("Update");
			$('#selectedID').val(own);
			$('#content').text("Edit employee's data");
			openForm();
		}
		function removeItem(own) {
			var dlt=confirm("Hapus employee : "+$('#name'+ own).text());
			if (dlt==true){
				$('#row'+own).remove();
			}
		}

		function saveDB() {
			var socket = io.connect('http://localhost');
		    socket.on('saveMsg', function (data) {
			    document.getElementById("container").innerHTML="<p>" + data.kalimatDariServer + "</p>"
			    ;
			    socket.emit('save', {
			    	id : "'"+ $('#fID').val() +"'",
			    	name : "'"+ $('#fName').val() +"'",
			    	department: "'"+ $('#fDepartment').val() +"'",
			    	salary :  $('#fSalary').val()
			    });
		    });
		}
<template lang="pug">
  
  nav
    .nav-wrapper
  .container
    .row
      .col.s12
  .container
    .row
      .col.s4
      .col.s4
        label Select Employee
          select(bind:value='{employeeID}' on:change='{handleEmployee}').browser-default
            option() Choose your guy and get a story
            | {#each employees as employee}
            option(value='{employee.id}') {employee.firstname} {employee.lastname}
            | {/each}
      .col.s4
      .col.s1
      .col.s10
        p
        br
        | {#if employee.firstname !== undefined}
        | Hi, my name is {employee.firstname} {employee.lastname}. I'm working for the {team.name} team.
        br
        br
        | {#if boss}
        | My boss is {boss.firstname} {boss.lastname} who's ratached to the {bossTeam.name} team.
        | {:else}
        | My boss is... I'm my own boss wtf !
        | {/if}
        br
        br
        | During a casual day at work, I use to work with 
        | {#each teamMembers as teamMember} {teamMember.firstname} {teamMember.lastname},&nbsp; {/each}
        | cool right ? 
        br
        br
        | We are the real vip in the {team.name} team.
        | {/if}
      .col.s1

</template>

<script lang="typescript">
  
  import * as io from 'socket.io-client'

  var socket = io('http://graphqldemoweb.local');
  let employees = []

  socket.on('employees', function (data: any) {
    console.log('GraphQL Employees:', data)
    employees = data
  });

  let employeeID: number
  let employee = {}
  let team = {}
  let boss = {}
  let bossTeam = {}
  let teamMembers = []

  function handleEmployee() {
    console.log('GraphQL Employee ID:', employeeID)
    socket.emit('employee-id', employeeID);
  }

  socket.on('employee', function (data: any) {
    console.log('GraphQL Employee:', data)
    employee = data
    team = data.team
    teamMembers = data.team.employees
    if (data.boss) { 
      boss = data.boss
      bossTeam = data.boss.team
    }
  });

</script>

<style lang="scss">

</style>
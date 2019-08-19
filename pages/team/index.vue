<template>
  <article>
    <section class="banner flex flex-center">
      <div class="overlay" />
      <div class="text-center color-white relative">
        <p>Team</p>
        <h2>Collaboration. Trust. Teamwork.</h2>
      </div>
    </section>
    <section class="team">
      <team-member v-for="member in team" :key="member.name" :member="member" />
    </section>
  </article>
</template>

<script>
import TeamMember from '@/components/TeamMember'
export default {
  name: 'TeamPage',
  components: {
    TeamMember
  },
  data() {
    return {
      team: [
        {
          name: 'Karch Gielow',
          title: 'CEO and Co-Founder',
          slogan: 'I will be there for you any hour of any day.  I will put you ahead of my whole family, and that means alot because I have 6 kids.',
          picture: 'Karch HS.jpg'
        },
        {
          name: 'Lydia Krebs',
          title: 'Head of External Affairs and Co-Founder',
          slogan: 'Take a look around, and yea, thats my name on the building.',
          picture: 'Lydia HS.jpg'
        },
        {
          name: 'Devon Knupp',
          title: 'Head of Human Resources and Creative Director',
          slogan: 'Put your complaint in the pile, I\'ll get to it eventually.  Actually I probably won\'t.',
          picture: 'Devon HS.jpg'
        },
        {
          name: 'Charlie Hill',
          title: 'Theoretical Analyst and Social Media Lead',
          slogan: 'I here by swear to provide you with at least one hot and sweaty tweet a day.',
          picture: 'Charles HS.jpg'
        },
        {
          name: 'Matt Nienhaus',
          title: 'Lead Administrative Assistant',
          slogan: 'I live and breathe to serve.',
          picture: 'Matt HS.jpg'
        },
        {
          name: 'Troy',
          title: 'Interim Document Co-Signer',
          slogan: 'Hey I\'m Troy.',
          picture: 'Troy HS.jpg'
        },
        {
          name: 'Zack Cuddy',
          title: 'Lead Web Developer and Technical Consult',
          slogan: 'I make awesome websites like this one.  Check me out:',
          link: 'https://zack-cuddy.com',
          picture: 'Zack HS.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  .banner {
    height: 60vh;
    max-height: 60vh;
    padding: 2rem 0 0 2rem;
    margin-top: 10vh;

    background: url('/images/Collab.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: relative;

    color: color(white);

    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      opacity: 0.5;
      background-color: color(black);
    }

    p {
      font-size: 1.8em;
    }
    h2 {
      font-size: 3em;
    }
  }

  .team {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
  }
</style>

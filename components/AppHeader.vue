<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">
          <AppIconFullLogo />
        </NuxtLink>
      </nav>
    </header>

    <HomePageBanner />
  </div>
</template>

<style scoped>
header {
  background: linear-gradient(90deg, #0D1C2C 0%, #1E3B70 100%);
}

nav {
  padding: 15.5px 0 15.5px 32px;
}
</style>

<script lang="ts" setup>
import { OnyxHeadline, OnyxLink } from "sit-onyx";
</script>

<template>
  <div>
    <OnyxHeadline is="h1">{{ $t("imprint.pageName") }}</OnyxHeadline>

    <OnlyGermanNoteAtom />

    <OnyxHeadline is="h2">Angaben gemäß § 5 TMG</OnyxHeadline>

    <p>
      Lars Rickert<br />
      Webentwicklung Lars Rickert<br />
      Panoramastr. 11<br />
      74177 Bad Friedrichshall
    </p>

    <OnyxHeadline is="h2">Kontakt</OnyxHeadline>
    <p>
      E-Mail:
      <OnyxLink href="mailto:info@lars-rickert.de"> info@lars-rickert.de </OnyxLink>
    </p>

    <OnyxHeadline is="h2">EU-Streitschlichtung</OnyxHeadline>
    <p>
      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
      <OnyxLink href="https://ec.europa.eu/consumers/odr" target="_blank">
        https://ec.europa.eu/consumers/odr </OnyxLink
      >.
      <br />
      Meine E-Mail-Adresse finden Sie oben im Impressum.
    </p>

    <OnyxHeadline is="h2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</OnyxHeadline>
    <p>
      Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>
  </div>
</template>

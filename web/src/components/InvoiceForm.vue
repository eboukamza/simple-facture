<script setup lang="ts"></script>

<template>
  <form>
    <h3 class="is-size-3">{{ $t("invoice.invoice") }}</h3>
    <div class="field">
      <label class="label">{{ $t("invoice.number") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.date") }}</label>
      <div class="control">
        <input class="input" type="date" />
      </div>
    </div>

    <h4 class="is-size-4">{{ $t("invoice.emitter") }}</h4>

    <div class="field">
      <label class="label">{{ $t("invoice.company.name") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.address") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.zipCode") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.city") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.country") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.vat") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <h4 class="is-size-4">{{ $t("invoice.customer") }}</h4>

    <div class="field">
      <label class="label">{{ $t("invoice.company.name") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.address") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.zipCode") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.city") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.country") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t("invoice.company.vat") }}</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <h4 class='is-size-4'>{{ $t("invoice.line.detail") }}</h4>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">{{ $t("invoice.line.detail") }}</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">{{ $t("invoice.line.endDate") }}</label>
          <div class="control">
            <input class="input" type="date" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">{{ $t("invoice.line.price") }}</label>
          <div class="control">
            <input class="input" type="number" min='0' />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">{{ $t("invoice.line.quantity") }}</label>
          <div class="control">
            <input class="input" type="number" min='1' />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">{{ $t("invoice.vat") }}</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
      </div>
    </div>

  </form>
</template>

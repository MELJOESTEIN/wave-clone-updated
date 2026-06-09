<script setup>
/**
 * TransactionRow — MOLÉCULE.
 * Une ligne d'historique : libellé + date à gauche, montant à droite.
 */
defineProps({
  label: { type: String, required: true },
  date: { type: String, required: true },
  amount: { type: String, required: true },
  negative: { type: Boolean, default: false },
})
</script>

<template>
  <div class="txn">
    <div class="txn__info">
      <strong>{{ label }}</strong>
      <small>{{ date }}</small>
    </div>
    <span class="txn__amount" :class="{ 'is-negative': negative }">{{ amount }}</span>
  </div>
</template>

<style scoped>
.txn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 4px;
  border-bottom: 1px solid var(--line);
}
.txn__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.txn__info strong {
  color: var(--wave-navy);
  font-weight: 700;
}
.txn__info small {
  color: var(--ink-soft);
  font-size: 0.78rem;
}
.txn__amount {
  font-weight: 800;
  color: var(--wave-navy);
}
.txn__amount.is-negative {
  color: var(--wave-navy);
}
</style>

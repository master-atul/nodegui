#pragma once
#include "Extras/Utils/nutils.h"
#include <QBoxLayout>

#include "Extras/Utils/nutils.h"
#include "QtWidgets/QLayout/qlayout_macro.h"
#include "core/Events/eventwidget_macro.h"

class DLL_EXPORT NBoxLayout : public QBoxLayout, public EventWidget {
  Q_OBJECT
 public:
  EVENTWIDGET_IMPLEMENTATIONS(QBoxLayout)
  using QBoxLayout::QBoxLayout;
  void connectSignalsToEventEmitter() { QLAYOUT_SIGNALS }
};
